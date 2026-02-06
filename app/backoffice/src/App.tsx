import { hello, Badge } from '@PegaseOff/pegase-ds';

function App() {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <h1>{hello()}</h1>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="danger">Danger</Badge>
      </div>
    </div>
  );
}

export default App;