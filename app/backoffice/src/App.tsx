import { Badge, Button, Input, Menu } from '@PegaseOff/pegase-ds';
import './App.css';
import { SizeEnum, VariantEnum } from '@pegaseoff/pegase-ds/src/utils/types';
import { Card, CardBody, CardFooter, CardHeader, CardImage, MenuItem, MenuLabel, MenuSeparator } from '@pegaseoff/pegase-ds';
import { useState } from 'react';

const variants = Object.values(VariantEnum);
const sizes = Object.values(SizeEnum);

function App() {
  const [active, setActive] = useState('home');
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
            <div className="ds-row">
              <div className="ds-item">
                <Input placeholder='Input medium' />
                <span className="ds-item-label">Actif</span>
              </div>
              <div className="ds-item">
                <Input placeholder='Input disabled' disabled />
                <span className="ds-item-label">Désactivé</span>
              </div>
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="ds-section">
          <h2 className="ds-section-title">Menu</h2>

          <div className="ds-block">
            <div className="ds-row">
              <div className="ds-item">
                <Menu activeKey={active} onChange={setActive}>
                  <MenuItem value="home">Accueil</MenuItem>
                  <MenuItem value="products">Produits</MenuItem>
                  <MenuItem value="contact" disabled>Contact</MenuItem>
                  <MenuSeparator />
                  <MenuLabel>Autres</MenuLabel>
                  <MenuItem value="settings">Paramètres</MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="ds-section">
          <h2 className="ds-section-title">Cards</h2>

          <div className="ds-block">
            <div className="ds-row">
              {sizes.map((s) => (
                <div key={s} className="ds-item">
                  <Card size={s}>
                    <CardImage src="./public/grocheval.png" alt="Card image" />
                    <CardHeader>
                      <h3 className="ds-card-title">Titre de la carte</h3>
                    </CardHeader>
                    <CardBody>
                      <p>Contenu de la carte</p>
                    </CardBody>
                    <CardFooter>
                      <Button variant="primary" size="medium">Action</Button>
                      <Button variant="success" size="medium">Action</Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;