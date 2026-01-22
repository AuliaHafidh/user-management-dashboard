import { addUser } from "../services/userService";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { toast } from "react-toastify";

function AddUser() {
    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        try {
            await addUser(data);
            toast.success("User berhasil ditambahkan!");
            navigate("/");
        } catch (error) {
            toast.error("Gagal menambahkan user");
        }
    };

    return (
        <div className="container">
            <button className="btn-back" onClick={() => navigate("/")}>
                ← Kembali
            </button>
            <h2>✨Tambah User Baru</h2>
            <p style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
                Isi form di bawah untuk menambahkan user baru
            </p>
            <UserForm onSubmit={handleSubmit} />
        </div>
    );
}

export default AddUser;