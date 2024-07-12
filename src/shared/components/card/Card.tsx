import { CardProps } from "../../models/Card.model";
import "./Card.scss";

const Card: React.FC<CardProps> = ({header, footer}) => {
    return (
        <div  className="card-deas caption p-0 h-100 justify-content-between">

            { header ?
                <section className={`card-deas__header p-3  ${header.class}`}>
                    <div className="fw-500 text-truncate">
                        <span >
                        {header.label}
                        </span>
                    </div>
                    <div className="card-deas__header__bottom text-truncate fw-300">
                        <span>
                        {header.value}
                        </span>
                    </div>
                </section>
                : null
            }

            { footer.length ? 
                <section className="card-deas__footer">
                    <div className="card-deas__footer w-100 d-flex justify-content-between border-gradient py-2 px-4">
                        {footer && 
                            footer.map((cta, index) => 
                                <i key={index} className={`cursor-pointer icon ${cta.icon}`} onClick={()=>cta.action(cta.actionType)} ></i>
                            )
                        }
                    </div>
                </section>
                : null
            }

            <div className="card-deas__overlay-polygon"></div>

        </div>
    )
}

export default Card

