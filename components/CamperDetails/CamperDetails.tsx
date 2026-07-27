import { Camper, type CamperDetails } from '@/type/Trucks';
import Image from 'next/image';
type CamperProps = {
  camper: CamperDetails;
};

export default function CamperDetails({ camper }: CamperProps) {
  return (
    <div>
      <div>
        <Image
          src={camper.}
          alt={camper.name}
          width={219}
          height={240}
        />
      </div>
      <div>
              <p>{ camper.name}</p>
              <div>
                  <p>{camper.rating}({camper.totalReviews}) </p>
                  <p>{ camper.location}</p>
        </div>
              <p>{ camper.price}</p>
              <p>{ camper.description}</p>
      </div>
      <div>
        <p>Vehicle details</p>
        <ul>
          <li>
            <p></p>
          </li>
          <li>
            <p></p>
          </li>
          <li>
            <p></p>
          </li>
          <li>
            <p></p>
          </li>
          <li>
            <p></p>
          </li>
        </ul>
      </div>
    </div>
  );
}
