import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsGridComponent } from './songs-grid.component';

describe('SongsGridComponent', () => {
  let component: SongsGridComponent;
  let fixture: ComponentFixture<SongsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsGridComponent ]
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
