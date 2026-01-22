function SearchBar({ value, onChange }) {
    return (
        <div className="search-container">
            <span className="search-icon"></span>
            <input
                type="text"
                placeholder="Cari nama atau email..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="search-input"
            />
        </div>
    );
}

export default SearchBar;