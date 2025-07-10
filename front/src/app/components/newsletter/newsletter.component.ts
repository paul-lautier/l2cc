import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, interval, switchMap, catchError, of } from 'rxjs';

interface SocialPost {
  id: string;
  platform: 'instagram' | 'linkedin';
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  publishedAt: Date;
  author: {
    name: string;
    profileImage: string;
    username: string;
  };
  engagement: {
    likes: number;
    comments: number;
    shares?: number;
  };
  postUrl: string;
}

@Component({
  selector: 'app-newsletter',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.css'
})
export class NewsletterComponent implements OnInit {
  socialPosts: SocialPost[] = [];
  loading = true;
  error: string | null = null;

  // Mock data for demonstration (replace with real API calls)
  mockPosts: SocialPost[] = [
    {
      id: '1',
      platform: 'instagram',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. #coaching #motivation',
      imageUrl: 'https://via.placeholder.com/400x400/667eea/ffffff?text=Instagram+Post',
      publishedAt: new Date('2024-01-15T10:30:00'),
      author: {
        name: 'Mental Coach',
        profileImage: 'https://via.placeholder.com/50x50/764ba2/ffffff?text=MC',
        username: '@mentalcoach'
      },
      engagement: {
        likes: 245,
        comments: 18
      },
      postUrl: 'https://instagram.com/p/example1'
    },
    {
      id: '2',
      platform: 'linkedin',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Sharing insights on professional development and mental wellness.',
      publishedAt: new Date('2024-01-14T14:20:00'),
      author: {
        name: 'Mental Coach',
        profileImage: 'https://via.placeholder.com/50x50/764ba2/ffffff?text=MC',
        username: 'mental-coach'
      },
      engagement: {
        likes: 89,
        comments: 12,
        shares: 5
      },
      postUrl: 'https://linkedin.com/posts/example2'
    },
    {
      id: '3',
      platform: 'instagram',
      content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. #mindfulness #wellness',
      imageUrl: 'https://via.placeholder.com/400x400/667eea/ffffff?text=Mindfulness',
      publishedAt: new Date('2024-01-13T16:45:00'),
      author: {
        name: 'Mental Coach',
        profileImage: 'https://via.placeholder.com/50x50/764ba2/ffffff?text=MC',
        username: '@mentalcoach'
      },
      engagement: {
        likes: 156,
        comments: 23
      },
      postUrl: 'https://instagram.com/p/example3'
    },
    {
      id: '4',
      platform: 'linkedin',
      content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Key strategies for maintaining work-life balance.',
      publishedAt: new Date('2024-01-12T09:15:00'),
      author: {
        name: 'Mental Coach',
        profileImage: 'https://via.placeholder.com/50x50/764ba2/ffffff?text=MC',
        username: 'mental-coach'
      },
      engagement: {
        likes: 134,
        comments: 28,
        shares: 15
      },
      postUrl: 'https://linkedin.com/posts/example4'
    }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadSocialPosts();
    // Refresh feed every 5 minutes
    interval(300000).pipe(
      switchMap(() => this.fetchSocialPosts()),
      catchError(error => {
        console.error('Error refreshing social posts:', error);
        return of([]);
      })
    ).subscribe(posts => {
      if (posts.length > 0) {
        this.socialPosts = posts;
      }
    });
  }

  loadSocialPosts() {
    this.loading = true;
    this.error = null;
    
    this.fetchSocialPosts().subscribe({
      next: (posts) => {
        this.socialPosts = posts;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading social posts:', error);
        this.error = 'Failed to load social media posts';
        this.loading = false;
        // Fallback to mock data
        this.socialPosts = this.mockPosts;
      }
    });
  }

  private fetchSocialPosts(): Observable<SocialPost[]> {
    // In a real implementation, you would call your backend API here
    // which would aggregate posts from Instagram and LinkedIn APIs
    // For now, we'll simulate with mock data
    return new Observable(observer => {
      setTimeout(() => {
        observer.next(this.mockPosts.sort((a, b) => 
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        ));
        observer.complete();
      }, 1000);
    });
  }

  refreshFeed() {
    this.loadSocialPosts();
  }

  formatDate(date: Date): string {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) {
      return 'Just now';
    } else if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  }

  getPlatformIcon(platform: string): string {
    switch (platform) {
      case 'instagram':
        return 'pi pi-instagram';
      case 'linkedin':
        return 'pi pi-linkedin';
      default:
        return 'pi pi-globe';
    }
  }

  getPlatformColor(platform: string): string {
    switch (platform) {
      case 'instagram':
        return '#E4405F';
      case 'linkedin':
        return '#0077B5';
      default:
        return '#667eea';
    }
  }

  trackByPostId(index: number, post: SocialPost): string {
    return post.id;
  }
}
