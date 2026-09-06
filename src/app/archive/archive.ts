import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ArchiveProject {
  month: string;
  year: number;
  title: string;
  location: string;
  category: string;
  images: string[];
  description: string;
  details: {
    cameras: string;
    installation: string;
    system: string;
    work: string;
  };
}

@Component({
  selector: 'app-archive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './archive.html',
  styleUrl: './archive.scss'
})
export class ArchiveComponent {

  selectedMonth = 'All';

  selectedProject: ArchiveProject | null = null;

  months = [
    'All',
    'August',
    'July',
    'June',
    'May'
  ];

  projects: ArchiveProject[] = [

    {
      month: 'August',
      year: 2026,
      title: 'Residential CCTV Installation',
      location: 'Bangalore',
      category: 'Residential',
      images: [
        'assets/images/archive/august/residential-1.jpg',
        'assets/images/archive/august/residential-2.jpg',
        'assets/images/archive/august/residential-3.jpg',
        'assets/images/archive/august/residential-4.jpg'
      ],
      description:
        'Professional CCTV installation planned around the property for reliable coverage and easy monitoring.',
      details: {
        cameras: '4MP CCTV System',
        installation: 'Professional Installation',
        system: 'DVR + Mobile Viewing',
        work: 'Camera placement, cabling, configuration & testing'
      }
    },

    {
      month: 'August',
      year: 2026,
      title: 'Commercial Office Surveillance',
      location: 'Electronic City',
      category: 'Commercial',
      images: [
        'assets/images/archive/august/office-1.jpg',
        'assets/images/archive/august/office-2.jpg',
        'assets/images/archive/august/office-3.jpg',
        'assets/images/archive/august/office-4.jpg'
      ],
      description:
        'Complete office surveillance setup with practical camera positioning and professional cable management.',
      details: {
        cameras: '5MP CCTV System',
        installation: 'Commercial Installation',
        system: 'DVR + Remote Viewing',
        work: 'Coverage planning, cabling, setup & testing'
      }
    },

    {
      month: 'July',
      year: 2026,
      title: 'Retail Store Security',
      location: 'Whitefield',
      category: 'Retail',
      images: [
        'assets/images/archive/july/retail-1.jpg',
        'assets/images/archive/july/retail-2.jpg',
        'assets/images/archive/july/retail-3.jpg',
        'assets/images/archive/july/retail-4.jpg'
      ],
      description:
        'Retail security installation focused on entrances, customer areas and important coverage points.',
      details: {
        cameras: '4MP CCTV System',
        installation: 'Retail Installation',
        system: 'DVR + Mobile Monitoring',
        work: 'Camera positioning, cabling & configuration'
      }
    },

    {
      month: 'July',
      year: 2026,
      title: 'Warehouse Surveillance',
      location: 'Bommasandra',
      category: 'Industrial',
      images: [
        'assets/images/archive/july/warehouse-1.jpg',
        'assets/images/archive/july/warehouse-2.jpg',
        'assets/images/archive/july/warehouse-3.jpg',
        'assets/images/archive/july/warehouse-4.jpg'
      ],
      description:
        'Warehouse surveillance setup designed for wide-area visibility and dependable recording.',
      details: {
        cameras: '5MP CCTV System',
        installation: 'Industrial Installation',
        system: 'DVR Recording System',
        work: 'Coverage planning, installation & testing'
      }
    },

    {
      month: 'June',
      year: 2026,
      title: 'Apartment Security Installation',
      location: 'Chandapura',
      category: 'Residential',
      images: [
        'assets/images/archive/june/apartment-1.jpg',
        'assets/images/archive/june/apartment-2.jpg',
        'assets/images/archive/june/apartment-3.jpg',
        'assets/images/archive/june/apartment-4.jpg'
      ],
      description:
        'Residential security installation providing practical coverage for entrances and common areas.',
      details: {
        cameras: '4MP CCTV System',
        installation: 'Residential Installation',
        system: 'DVR + Mobile Viewing',
        work: 'Camera placement, cabling & configuration'
      }
    },

    {
      month: 'May',
      year: 2026,
      title: 'Business CCTV Upgrade',
      location: 'Jigani',
      category: 'Commercial',
      images: [
        'assets/images/archive/may/business-1.jpg',
        'assets/images/archive/may/business-2.jpg',
        'assets/images/archive/may/business-3.jpg',
        'assets/images/archive/may/business-4.jpg'
      ],
      description:
        'CCTV upgrade focused on improving coverage, recording reliability and remote monitoring.',
      details: {
        cameras: '5MP CCTV System',
        installation: 'Commercial Upgrade',
        system: 'DVR + Remote Monitoring',
        work: 'Camera upgrade, configuration & testing'
      }
    }

  ];

  get filteredProjects(): ArchiveProject[] {
    if (this.selectedMonth === 'All') {
      return this.projects;
    }

    return this.projects.filter(
      project => project.month === this.selectedMonth
    );
  }

  selectMonth(month: string): void {
    this.selectedMonth = month;
    this.selectedProject = null;
  }

  openProject(project: ArchiveProject): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }

}