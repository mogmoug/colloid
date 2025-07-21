// src/components/NavLink.jsx

export default function NavLink({ link }) {
  return (
    <a 
      href={link.url} 
      target="_blank"
      className="nav-link"
      data-tooltip={link.description}
    >
      <img 
        src={`icons/${link.icon}`} 
        alt={link.name} 
        className="nav-link-icon"
        loading="lazy"
        decoding="async"
      />
      {link.name}
    </a>
  );
}