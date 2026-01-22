import { useState, useEffect } from "react";

function UserForm({ user, onSubmit }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
    });

    const [errors, setErrors] = useState({});

    // isi form saat di edit
    useEffect(() => {
        if (user) {
            setForm({
                name: user.name || "",
                email: user.email || "",
            });
        }
    }, [user]);

    const validate = () => {
        const newErrors = {};
        const name = form.name.trim();
        const email = form.email.trim();

        if (!name) {
            newErrors.name = "Nama wajib diisi";
        } else if (name.length < 3) {
            newErrors.name = "Nama minimal 3 karakter";
        }

        if (!email) {
            newErrors.email = "Email wajib diisi";
        } else if (!email.includes("@") || email === "@gmail.com") {
            newErrors.email = "Format email tidak valid";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        // Clear error saat user mengetik
        if (errors[e.target.name]) {
            setErrors((prev) => ({
                ...prev,
                [e.target.name]: "",
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;
        onSubmit({
            name: form.name.trim(),
            email: form.email.trim(),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nama</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder="Masukkan nama lengkap"
                    onChange={handleChange}
                    className={errors.name ? "error" : ""}
                />
                {errors.name && (
                    <small>{errors.name}</small>
                )}
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="contoh@email.com"
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                />
                {errors.email && (
                    <small>{errors.email}</small>
                )}
            </div>

            <button className="btn-primary" type="submit">
                💾 Simpan
            </button>
        </form>
    );
}

export default UserForm;