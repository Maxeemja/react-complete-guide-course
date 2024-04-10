export default function TabButton({ children, onSelect, isSelected }) {
	return (
		<li onClick={onSelect}>
			<button className={isSelected ? 'active' : undefined}>{children}</button>
		</li>
	);
}
