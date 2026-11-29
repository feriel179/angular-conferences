
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Conference } from '../../models/conference';
import { Organizer } from '../../models/organizers';
import { OrganizerList } from '../../components/organizer-list/organizer-list';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, OrganizerList],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  title: string = '';
  listConferences: Conference[] = [];
  searchTitle: string = '';

  constructor() {}

  ngOnInit(): void {
    this.title = 'Home 4DAS 9';

    const organizer1: Organizer = {
      id: 1,
      name: 'Fériel Souissi',
      email: 'feriel@example.com',
      picture: 'https://i.pravatar.cc/300?img=47',
      university: 'ESPRIT - Étudiante'
    };

    const organizer2: Organizer = {
      id: 2,
      name: 'Étudiant 2',
      email: 'etudiant2@example.com',
      picture: 'https://i.pravatar.cc/300?img=12',
      university: 'ESPRIT - Étudiant'
    };

    const organizer3: Organizer = {
      id: 3,
      name: 'Étudiant 3',
      email: 'etudiant3@example.com',
      picture: 'https://i.pravatar.cc/300?img=44',
      university: 'ESPRIT - Étudiant'
    };

    this.listConferences = [
      {
        id: 1,
        title: 'Angular Conference',
        description: 'Angular Conference Developer',
        address: 'ESPRIT-Tunisia',
        nbr_Max: 50,
        nbr_Participation: 48,
        date: '10-12-2026',
        picture: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
        organizers: [organizer1, organizer2]
      },
      {
        id: 2,
        title: 'Angular React',
        description: 'Conférence Angular et React',
        address: 'ESPRIT-Tunisia',
        nbr_Max: 50,
        nbr_Participation: 50,
        date: '10-11-2026',
        picture: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600',
        organizers: [organizer3]
      },
      {
        id: 3,
        title: 'Cloud Computing',
        description: 'Conférence Cloud et DevOps',
        address: 'ESPRIT-Tunisia',
        nbr_Max: 100,
        nbr_Participation: 20,
        date: '15-12-2026',
        picture: 'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=600',
        organizers: []
      }
    ];
  }

  participate(conference: Conference): void {
    if (conference.nbr_Participation < conference.nbr_Max) {
      conference.nbr_Participation++;
    }
  }
}
