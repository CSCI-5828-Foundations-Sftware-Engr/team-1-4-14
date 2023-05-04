import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableModule } from 'primeng/table';
import { SongsGridComponent } from './songs-grid.component';
import { SongService } from 'src/services/SongService';

describe('SongsGridComponent', () => {
  let component: SongsGridComponent;
  let fixture: ComponentFixture<SongsGridComponent>;
  const songServiceStub = {getSongs: () => {}, getSongYear: () => {}};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableModule],
      declarations: [ SongsGridComponent ],
      providers: [ { provide: SongService, useValue: songServiceStub } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
