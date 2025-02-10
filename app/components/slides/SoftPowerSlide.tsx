import { useEffect, useState } from 'react';
import softpowers from '../../json/soft.json';

interface Item {
  id: number;
  title: String;
  image: { src: String, alt: String };
  description: String;
  order: number;
}


function SoftPowerSlide() {
  const [items, setItems] = useState<Item[]>([]);
  const [selected, setSelected] = useState<Item | null>(null);

  useEffect(() => {
    const newItems = softpowers.map((el, i) => Object.assign(el, { order: i }))
    setItems(newItems);
  }, []);

  useEffect(() => {
    if (!selected) {
      return;
    };
    const selectedOrder = selected.order;
    const newItems = items.map((el, i) => {
      if (el.order > selectedOrder) {
        const oldOrder = el.order;
        el.order = oldOrder - 1;
      } else if (el.order === selectedOrder) {
        el.order = 4;
      }
      return el;
    })
    setItems(newItems);
  }, [selected]);

  const handleSelect = (id: number) => {
    const selected = items.find(el => el.id == id);
    if (!selected || selected.order === 4) {
      return;
    }
    setSelected(selected);
  }

  return (
    <>
      <div className="soft--container slide">
        <h2 className="content__title">Soft Power</h2>
        <ul className="content__description">
          {items.map((item) => (
            <li
              key={item.id}
              className={`item-${item.order}`}
              onClick={() => handleSelect(item.id)}
            >
              <h3 className="letter">{item.title}</h3>
              <p>
                {item.description}
              </p>
              <div className="wrapper p-2" style={{ backgroundImage: `url(${item.image.src})` }}>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SoftPowerSlide;