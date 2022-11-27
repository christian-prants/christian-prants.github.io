import { Icon } from '@iconify/react';
import "../styles/card.scss";

const Card = (props) => {
  return (
    <div key={props.id} className="card_">
      <section className="card_sec_">
        <div className="card_sec_gif_">
          <img src={props.items.gif} className = 'card_sec_gif_asset' alt="card-gif" />
        </div>

        <div className="card_sec_modal_">
          
        </div>

        <img src={props.items.img} className = 'card_sec_image' alt="card-img" />

        <div className="card_sec_title">
          <h1>{props.items.title}</h1>
        </div>

        <div className="card_sec_desc_">
          <p>{props.items.description}</p>

          <div className="card_sec_desc_icons">
            <a
              href={props.items.githubProject}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:github" cursor="pointer" />
            </a>
            <a
              href={props.items.githubPage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="mdi:web-asset" cursor="pointer" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Card;
