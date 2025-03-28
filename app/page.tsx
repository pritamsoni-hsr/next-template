export default function Home() {
  return (
    <div className={'from-background to-accent/10 min-h-screen bg-gradient-to-b'}>
      {/* Hero Section */}
      <div className={'container mx-auto px-4 py-20'}>
        <div className={'flex flex-col items-center text-center'}>
          <h1 className={'text-foreground mb-6 text-6xl font-bold tracking-tight'}>
            Welcome to <span className={'text-primary'}>Next.js</span>
          </h1>
          <p className={'text-muted-foreground mb-8 max-w-2xl text-lg'}>
            Build beautiful, modern web applications with the power of React and Next.js. Get started quickly and
            deploy with confidence.
          </p>
          <div className={'flex gap-4'}>
            <a
              className={
                'bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-3 font-medium transition-colors'
              }
              href={'#'}>
              Get Started
            </a>
            <a
              className={
                'border-border bg-background text-foreground hover:bg-accent/10 rounded-full border px-8 py-3 font-medium transition-colors'
              }
              href={'#'}>
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={'container mx-auto px-4 py-20'}>
        <div className={'grid gap-8 md:grid-cols-3'}>
          <div className={'border-border bg-card rounded-xl border p-6'}>
            <div className={'bg-primary/10 mb-4 w-fit rounded-full p-3'}>
              <svg
                className={'text-primary h-6 w-6'}
                fill={'none'}
                height={'24'}
                stroke={'currentColor'}
                viewBox={'0 0 24 24'}
                width={'24'}>
                <path
                  d={'M13 10V3L4 14h7v7l9-11h-7z'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                />
              </svg>
            </div>
            <h3 className={'text-card-foreground mb-2 text-xl font-semibold'}>Lightning Fast</h3>
            <p className={'text-muted-foreground'}>Built on React and optimized for performance out of the box.</p>
          </div>

          <div className={'border-border bg-card rounded-xl border p-6'}>
            <div className={'bg-primary/10 mb-4 w-fit rounded-full p-3'}>
              <svg
                className={'text-primary h-6 w-6'}
                fill={'none'}
                height={'24'}
                stroke={'currentColor'}
                viewBox={'0 0 24 24'}
                width={'24'}>
                <path
                  d={
                    'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
                  }
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                />
              </svg>
            </div>
            <h3 className={'text-card-foreground mb-2 text-xl font-semibold'}>Database Ready</h3>
            <p className={'text-muted-foreground'}>Integrate with your favorite database and ORM seamlessly.</p>
          </div>

          <div className={'border-border bg-card rounded-xl border p-6'}>
            <div className={'bg-primary/10 mb-4 w-fit rounded-full p-3'}>
              <svg
                className={'text-primary h-6 w-6'}
                fill={'none'}
                height={'24'}
                stroke={'currentColor'}
                viewBox={'0 0 24 24'}
                width={'24'}>
                <path
                  d={'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'}
                  strokeLinecap={'round'}
                  strokeLinejoin={'round'}
                  strokeWidth={2}
                />
              </svg>
            </div>
            <h3 className={'text-card-foreground mb-2 text-xl font-semibold'}>Modern Stack</h3>
            <p className={'text-muted-foreground'}>Built with TypeScript and modern web standards.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className={'container mx-auto px-4 py-20'}>
        <div className={'bg-card rounded-2xl p-12 text-center'}>
          <h2 className={'text-card-foreground mb-4 text-4xl font-bold'}>Ready to Get Started?</h2>
          <p className={'text-muted-foreground mb-8 text-lg'}>
            Join thousands of developers building amazing applications with Next.js
          </p>
          <a
            className={
              'bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center rounded-full px-8 py-3 font-medium transition-colors'
            }
            href={'#'}>
            Start Building →
          </a>
        </div>
      </div>
    </div>
  );
}
