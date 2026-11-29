
import { Organizer } from './organizers';

export class Conference {
  id: number;
  title: string;
  description: string;
  picture: string;
  address: string;
  nbr_Max: number;
  nbr_Participation: number;
  date: string;
  organizers: Organizer[];
}
