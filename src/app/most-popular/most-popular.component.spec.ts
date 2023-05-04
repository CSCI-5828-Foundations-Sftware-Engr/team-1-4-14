import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularComponent } from './most-popular.component';
import { SongService } from 'src/services/SongService';
import { TableModule } from 'primeng/table';

describe('MostPopularComponent', () => {
  let component: MostPopularComponent;
  let fixture: ComponentFixture<MostPopularComponent>;
  const songServiceStub = {getPopularSongs: () => {}};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableModule],
      declarations: [ MostPopularComponent ],
      providers: [ { provide: SongService, useValue: songServiceStub } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
