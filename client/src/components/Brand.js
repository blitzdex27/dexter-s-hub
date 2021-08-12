export default function Brand({ gotoPage }) {
  return (
    <div onClick={gotoPage} className="brand">
      <h1 className="nav-brand">Dexter's Hub</h1>
    </div>
  );
}
