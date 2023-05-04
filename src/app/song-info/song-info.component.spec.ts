import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { SongInfoComponent } from './song-info.component';
import { SongService } from 'src/services/SongService';
import { of } from 'rxjs';
import { TabViewModule } from 'primeng/tabview';
import { SafePipe } from 'src/pipes/SafePipe';
import { TableModule } from 'primeng/table';

describe('SongInfoComponent', () => {
  let component: SongInfoComponent;
  let fixture: ComponentFixture<SongInfoComponent>;
  const songServiceStub = {getSongInfo: () => {return of({})}};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TabViewModule, TableModule],
      declarations: [ SongInfoComponent, SafePipe ],
      providers: [ { provide: SongService, useValue: songServiceStub } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
