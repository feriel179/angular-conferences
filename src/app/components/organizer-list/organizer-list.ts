
import { Component } from '@angular/core';
import { Organizer } from '../../models/organizers';

@Component({
  selector: 'app-organizer-list',
  imports: [],
  templateUrl: './organizer-list.html',
  styleUrl: './organizer-list.css'
})
export class OrganizerList {

  organizers: Organizer[] = [
    {
      id: 1,
      name: 'Fériel Souissi',
      email: 'feriel@example.com',
      picture: 'https://i.pravatar.cc/300?img=47',
      university: 'ESPRIT - Étudiante'
    },
    {
      id: 2,
      name: 'Étudiant 2',
      email: 'etudiant2@example.com',
      picture: 'https://i.pravatar.cc/300?img=12',
      university: 'ESPRIT - Étudiant'
    },
    {
      id: 3,
      name: 'Étudiant 3',
      email: 'etudiant3@example.com',
      picture: 'https://i.pravatar.cc/300?img=44',
      university: 'ESPRIT - Étudiant'
    }
  ];
}
