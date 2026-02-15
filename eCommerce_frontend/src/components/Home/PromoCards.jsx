
function PromoCard({ bgColor, description, Image, buttons }) {
  return (
    <div
      className="p-4 rounded text-white shadow "
      style={{ backgroundColor: bgColor,minWidth: "150px" }}
    >
       {/* Image + Text on same line */}
      <div className="d-flex align-items-center gap-3 mb-3">
        {Image && (
          <img
            src={Image}
            alt="Promo"
            className="rounded"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          />
        )}
        <p className="mb-0">{description}</p>
      </div>

      {/* Buttons (optional) */}
      {buttons && buttons.length > 0 && (
        <div className="d-flex flex-column gap-2 mt-2">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`btn btn-${btn.variant || "primary"}`}
              onClick={btn.onClick}
            >
              {btn.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default PromoCard;


