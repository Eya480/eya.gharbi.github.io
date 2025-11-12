import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Projects } from './projects';
import { Portfolio } from '../../services/portfolio';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;
  let portfolioService: jasmine.SpyObj<Portfolio>;

  beforeEach(async () => {
    const portfolioServiceSpy = jasmine.createSpyObj('PortfolioService', [
      'getProjects',
      'getProjectCategories'
    ]);

    await TestBed.configureTestingModule({
      imports: [Projects],
      providers: [
        { provide: Portfolio, useValue: portfolioServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    portfolioService = TestBed.inject(Portfolio) as jasmine.SpyObj<Portfolio>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load projects on init', () => {
    const mockProjects = [{
      id: 1,
      title: 'Test Project',
      description: 'Test Description',
      detailedDescription: 'Detailed Description',
      imageUrl: 'test.jpg',
      technologies: ['Angular'],
      githubUrl: 'https://github.com/test',
      category: 'frontend',
      featured: true,
      startDate: new Date(),
      status: 'completed' as const
    }];

    portfolioService.getProjects.and.returnValue(of(mockProjects));
    portfolioService.getProjectCategories.and.returnValue(of(['all', 'frontend']));

    fixture.detectChanges();

    expect(portfolioService.getProjects).toHaveBeenCalled();
    expect(component.filteredProjects).toEqual(mockProjects);
  });

  it('should filter projects by category', () => {
    const mockProjects = [
      {
        id: 1,
        title: 'Frontend Project',
        description: 'Test',
        detailedDescription: 'Test',
        imageUrl: 'test.jpg',
        technologies: ['Angular'],
        githubUrl: 'https://github.com/test',
        category: 'frontend',
        featured: true,
        startDate: new Date(),
        status: 'completed' as const
      },
      {
        id: 2,
        title: 'Backend Project',
        description: 'Test',
        detailedDescription: 'Test',
        imageUrl: 'test.jpg',
        technologies: ['Spring Boot'],
        githubUrl: 'https://github.com/test',
        category: 'backend',
        featured: false,
        startDate: new Date(),
        status: 'completed' as const
      }
    ];

    portfolioService.getProjects.and.returnValue(of(mockProjects));
    component.ngOnInit();

    component.filterProjects('frontend');
    expect(component.filteredProjects.length).toBe(1);
    expect(component.filteredProjects[0].category).toBe('frontend');
  });
});