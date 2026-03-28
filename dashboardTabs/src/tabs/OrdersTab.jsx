import { useState } from 'react'

const ORDERS = [
  { id: 'ORD-001', item: 'Keyboard',     cat: 'Peripherals', date: 'Mar 18, 2026', amount: 149.99, status: 'Delivered' },
  { id: 'ORD-002', item: 'Monitor',      cat: 'Displays',    date: 'Mar 14, 2026', amount: 699.00, status: 'Shipped' },
  { id: 'ORD-003', item: 'Office Chair', cat: 'Furniture',   date: 'Mar 10, 2026', amount: 389.00, status: 'Processing' },
  { id: 'ORD-004', item: 'USB Hub',      cat: 'Accessories', date: 'Mar 5, 2026',  amount: 59.99,  status: 'Delivered' },
  { id: 'ORD-005', item: 'Headset',      cat: 'Audio',       date: 'Feb 28, 2026', amount: 229.00, status: 'Cancelled' },
  { id: 'ORD-006', item: 'Charging Pad', cat: 'Accessories', date: 'Feb 20, 2026', amount: 49.99,  status: 'Delivered' },
]

// colors for each status pill
const STATUS_MAP = {
  Delivered:  { color: '#34d399', bg: 'rgba(52,211,153,0.08)',  border: 'rgba(52,211,153,0.2)' },
  Shipped:    { color: '#38bdf8', bg: 'rgba(56,189,248,0.08)',  border: 'rgba(56,189,248,0.2)' },
  Processing: { color: '#fbbf24', bg: 'rgba(251,191,36,0.08)',  border: 'rgba(251,191,36,0.2)' },
  Cancelled:  { color: '#f87171', bg: 'rgba(248,113,113,0.08)', border: 'rgba(248,113,113,0.2)' },
}

// top summary cards
const SUMMARY = [
  { label: 'Total Spent', getValue: o => `$${o.filter(x => x.status !== 'Cancelled').reduce((s, x) => s + x.amount, 0).toFixed(2)}`, color: '#9090c0' },
  { label: 'Delivered',   getValue: o => `${o.filter(x => x.status === 'Delivered').length} orders`, color: '#34d399' },
  { label: 'In Transit',  getValue: o => `${o.filter(x => x.status === 'Shipped' || x.status === 'Processing').length} orders`, color: '#38bdf8' },
]

export default function OrdersTab() {
  const [filter, setFilter] = useState('All')
  const statuses = ['All', 'Delivered', 'Shipped', 'Processing', 'Cancelled']
  const filtered = filter === 'All' ? ORDERS : ORDERS.filter(o => o.status === filter)

  return (
    <div>

      {/* summary cards at the top */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 36 }}>
        {SUMMARY.map(s => (
          <div key={s.label} className="stat-card" style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{ width: 4, height: 48, borderRadius: 4, background: s.color, opacity: 0.6, flexShrink: 0 }} />
            <div>
              <div className="chrome" style={{ fontSize: 22, fontWeight: 900, lineHeight: 1 }}>{s.getValue(ORDERS)}</div>
              <div style={{ fontSize: 11, color: '#404060', marginTop: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* filter buttons + result count */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div className="filter-bar">
          {statuses.map(s => (
            <button key={s} className={`filter-btn ${filter === s ? 'active' : ''}`} onClick={() => setFilter(s)}>
              {s}
            </button>
          ))}
        </div>
        <div style={{ fontSize: 11, color: '#282840', letterSpacing: '0.05em' }}>
          {filtered.length} result{filtered.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* table column headers */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2.5fr 1fr 1fr 1.2fr',
        gap: 16,
        padding: '0 20px 12px',
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: '#252540',
      }}>
        <span>Order</span><span>Item</span><span>Date</span><span>Amount</span><span>Status</span>
      </div>

      {/* order rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {filtered.map(order => {
          const s = STATUS_MAP[order.status]
          return (
            <div key={order.id} className="order-row" style={{ gridTemplateColumns: '1fr 2.5fr 1fr 1fr 1.2fr' }}>
              <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#303050' }}>{order.id}</span>
              <div>
                <div style={{ fontSize: 13, color: '#c0c0d8', fontWeight: 500 }}>{order.item}</div>
                <div style={{ fontSize: 10, color: '#282840', marginTop: 3 }}>{order.cat}</div>
              </div>
              <span style={{ fontSize: 11, color: '#303050' }}>{order.date}</span>
              <span className="chrome" style={{ fontSize: 14, fontWeight: 800 }}>${order.amount.toFixed(2)}</span>
              <div className="pill" style={{ color: s.color, background: s.bg, borderColor: s.border }}>
                <span className="pill-dot" style={{ background: s.color }} />
                {order.status}
              </div>
            </div>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#202038', fontSize: 13 }}>
          No orders match this filter.
        </div>
      )}

      {/* footer with total */}
      <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 11, color: '#202038' }}>Showing {filtered.length} of {ORDERS.length} orders</span>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#282840', marginBottom: 6 }}>Filtered Total</div>
          <div className="chrome" style={{ fontSize: 24, fontWeight: 900, lineHeight: 1 }}>
            ${filtered.filter(o => o.status !== 'Cancelled').reduce((s, o) => s + o.amount, 0).toFixed(2)}
          </div>
        </div>
      </div>

    </div>
  )
}
