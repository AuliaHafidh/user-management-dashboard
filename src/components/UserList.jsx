import { useEffect, useState } from "react";
import { getUsers, deleteUsers } from "../services/userService";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import DeleteModal from "./DeleteModal";
import LoadingSkeleton from "./LoadingSkeleton";
import Avatar from "./Avatar";

const ITEMS_PER_PAGE = 5;

function UserList() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const loadUsers = async () => {
        setIsLoading(true);
        try {
            const res = await getUsers();
            setUsers(res.data);
        } catch (error) {
            toast.error("Gagal memuat data user");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleConfirmDelete = async () => {
        await deleteUsers(selectedUser.id);
        toast.success("User berhasil dihapus");
        setShowModal(false);
        setSelectedUser(null);
        loadUsers();
    };

    const filteredUsers = users.filter((user) =>
        `${user.name} ${user.email}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedUsers = filteredUsers.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    return (
        <div className="card">
            <div className="header">
                <h2>Daftar Pengguna</h2>
                <Link className="btn-primary btn-user" to={"/add"}>Tambah User</Link>
            </div>

            <SearchBar value={search} onChange={setSearch} />

            {isLoading ? (
                <LoadingSkeleton rows={5} />
            ) : (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedUsers.length === 0 ? (
                                <tr>
                                    <td colSpan="3">
                                        <div className="empty-state">
                                            <p>Tidak ada data user ditemukan</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                paginatedUsers.map((user) => (
                                    <tr key={user.id}>
                                        <td data-label="Nama">
                                            <div className="user-info">
                                                <Avatar name={user.name} size={36} />
                                                <span>{user.name}</span>
                                            </div>
                                        </td>
                                        <td data-label="Email">{user.email}</td>
                                        <td data-label="Aksi">
                                            <Link className="btn-edit" to={`/edit/${user.id}`}>Edit</Link>
                                            <button
                                                className="btn-danger"
                                                onClick={() => {
                                                    setSelectedUser(user);
                                                    setShowModal(true);
                                                }}
                                            >Hapus</button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </>
            )}
            <DeleteModal
                isOpen={showModal}
                user={selectedUser}
                onClose={() => setShowModal(false)}
                onConfirm={handleConfirmDelete} />
        </div>
    );
};

export default UserList;