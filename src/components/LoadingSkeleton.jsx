function LoadingSkeleton({ rows = 5 }) {
    return (
        <div className="skeleton-container">
            {[...Array(rows)].map((_, index) => (
                <div key={index} className="skeleton-row">
                    <div className="skeleton-cell skeleton-name">
                        <div className="skeleton-avatar"></div>
                        <div className="skeleton-text"></div>
                    </div>
                    <div className="skeleton-cell skeleton-email">
                        <div className="skeleton-text"></div>
                    </div>
                    <div className="skeleton-cell skeleton-actions">
                        <div className="skeleton-button"></div>
                        <div className="skeleton-button"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default LoadingSkeleton;
