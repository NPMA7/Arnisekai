const Highlight = ({ title_anime, poster_anime }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="text-transparent" style={{ marginBottom: '10px' }}>{title_anime}</div>
      <img alt={title_anime} src={poster_anime} style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  );
};

export default Highlight;
