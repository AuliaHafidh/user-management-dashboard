import { useEffect, useState } from "react";
import { getUserById, updateUser } from "../services/userService";
import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
import { toast } from "react-toastify";

function EditUser() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUserById(id)
            .then((res) => {
                setUser(res.data);
                setLoading(false);
            })
            .catch(() => {
                toast.error("User tidak ditemukan");
                navigate("/");
            });
    }, [id, navigate]);

    const handleSubmit = async (data) => {
        try {
            await updateUser(id, data);
            toast.success("User berhasil diperbarui!");
            navigate("/");
        } catch {
            toast.error("Gagal memperbarui user");
        }
    };

    if (loading) {
        return (
            <div className="container">
                <div className="loading">
                    <p>⏳ Memuat data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <button className="btn-back" onClick={() => navigate("/")}>
                ← Kembali
            </button>
            <h2>✏️ Edit User</h2>
            <p style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
                Perbarui informasi user di bawah
            </p>
            <UserForm user={user} onSubmit={handleSubmit} />
        </div>
    );
}

export default EditUser;