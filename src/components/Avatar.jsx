/**
 * Avatar Component - Auto-generates avatar from user name
 * Uses DiceBear API for stylish avatars
 */
function Avatar({ name, size = 40, className = "" }) {
    // Encode name for URL
    const encodedName = encodeURIComponent(name || "User");

    // Generate avatar using DiceBear (initials style with gradient)
    const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodedName}&backgroundColor=a0a0b0&fontSize=40`;

    // Fallback to UI Avatars if DiceBear fails
    const fallbackUrl = `https://ui-avatars.com/api/?name=${encodedName}&background=random&color=fff&bold=true&size=${size * 2}`;

    const handleError = (e) => {
        e.target.src = fallbackUrl;
    };

    return (
        <div
            className={`avatar ${className}`}
            style={{ width: size, height: size }}
        >
            <img
                src={avatarUrl}
                alt={`Avatar of ${name}`}
                onError={handleError}
                loading="lazy"
            />
        </div>
    );
}

export default Avatar;
