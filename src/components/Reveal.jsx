import useReveal from '../hooks/useReveal'

// Scroll-reveal wrapper. `variant` picks the entrance direction:
// 'up' (default), 'left', 'right', or 'scale'.
export default function Reveal({ as: Tag = 'div', variant = 'up', className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal reveal-${variant} ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
