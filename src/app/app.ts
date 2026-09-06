import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Solutions } from './components/solutions/solutions';
import { Packages } from './components/packages/packages';
import { Installation } from './components/installation/installation';
import { Process } from './components/process/process';
import { Work } from './components/work/work';
import { Gallery } from './components/gallery/gallery';
import { Locations } from './components/locations/locations';
import { WhyJs } from './components/why-js/why-js';
import { ArchiveComponent } from './archive/archive';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { FloatingButtons } from './components/floating-buttons/floating-buttons';

@Component({
  selector: 'app-root',

  imports: [
    Navbar,
    Hero,
    Solutions,
    Packages,
    Installation,
    Process,
    Work,
    Gallery,
    Locations,
    WhyJs,
    Contact,
    ArchiveComponent,
    Footer,
    FloatingButtons
  ],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}