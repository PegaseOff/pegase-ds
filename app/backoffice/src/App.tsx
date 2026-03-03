import { Badge, Button, Input } from '@PegaseOff/pegase-ds';
import './App.css';
import { SizeEnum, VariantEnum } from '@pegaseoff/pegase-ds/src/utils/types';

const variants = Object.values(VariantEnum);
const sizes = Object.values(SizeEnum);

function App() {
  return (
    <div className="ds-page">
      <header className="ds-header">
        <h1>Pegase — Design System</h1>
        <p>Catalogue des composants</p>
      </header>

      <main className="ds-main">

        {/* Badge */}
        <section className="ds-section">
          <h2 className="ds-section-title">Badge</h2>

          <div className="ds-block">
            <h3 className="ds-block-label">Variantes</h3>
            <div className="ds-row">
              {variants.map((v) => (
                <div key={v} className="ds-item">
                  <Badge variant={v}>{v}</Badge>
                  <span className="ds-item-label">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Button */}
        <section className="ds-section">
          <h2 className="ds-section-title">Button</h2>

          <div className="ds-block">
            <h3 className="ds-block-label">Variantes</h3>
            <div className="ds-row">
              {variants.map((v) => (
                <div key={v} className="ds-item">
                  <Button variant={v}>{v}</Button>
                  <span className="ds-item-label">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ds-block">
            <h3 className="ds-block-label">Tailles</h3>
            <div className="ds-row ds-row--align-end">
              {sizes.map((s) => (
                <div key={s} className="ds-item">
                  <Button size={s}>{s}</Button>
                  <span className="ds-item-label">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ds-block">
            <h3 className="ds-block-label">État désactivé</h3>
            <div className="ds-row">
              {variants.map((v) => (
                <div key={v} className="ds-item">
                  <Button variant={v} disabled>{v}</Button>
                  <span className="ds-item-label">disabled</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inputs */}
        <section className="ds-section">
          <h2 className="ds-section-title">Input</h2>

          <div className="ds-block">
            <h3 className="ds-block-label">Tailles</h3>
            <div className="ds-row">
              <div className="ds-item">
                <Input placeholder='Input small' />
                <span className="ds-item-label">Medium</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;