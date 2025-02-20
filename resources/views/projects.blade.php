@extends('mainlayout')
@section('title', 'Our Projects | TOPSURE INDUSTRIAL MACHINERIES AND CONTROLS CORPORATION')
@section('content')

<div class="max-w-screen-2xl px-5 py-12 mx-auto space-y-16">
    <section class="max-w-screen-xl mx-auto space-y-12 text-center">
        <div class="space-y-4">
            <h3 class="text-timco-red font-bold text-lg">Project Gallery</h3>
            <h1 class="text-4xl md:text-7xl font-bold text-timco-dark-blue">
                Excellence in Engineering and Innovation
            </h1>
        </div>
        <p class="text-xl text-balance">
            At TIMCO, we take pride in delivering high-quality engineering
            solutions that exceed client expectations. With decades of expertise
            in the metal industry, our projects span across various sectors,
            showcasing our commitment to precision, durability, and innovation.
            From industrial manufacturing to custom-engineered solutions, each
            project reflects our dedication to reliability, cost-efficiency, and
            superior craftsmanship. Explore our portfolio and see how TIMCO
            continues to shape industries with cutting-edge solutions and
            exceptional service.
        </p>

        <p class="text-xl text-balance">
            The following is a list of projects that TIMCO has developed
            throughout the years.
        </p>

        <div class="p-5">
            <div class="columns-2 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
                @foreach(range(1, 32) as $index)
                <img loading="lazy" class="h-auto max-w-full rounded-lg" src="{{ asset('images/projects/p' . $index . '.png') }}" alt="Image {{ $index }}">
                @endforeach
            </div>
        </div>


    </section>
</div>

@endsection