import OurProjects from "../../content/projects.json";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { VscGithubInverted } from "react-icons/vsc";
import { VscBook } from "react-icons/vsc";

export default function Projects() {
	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
			<section className="py-16 bg-violet-100 py-16 md:py-24 px-8 lg:px-12">
				<div className="max-w-7xl mx-auto ">
					<div className="pb-8 lg:pb-16 text-center">
						<h2 className="text-dark mb-6 font-bold text-6xl md:text-[40px]">
							Our Projects
						</h2>
						<p className="mx-auto text-body-color text-lg max-w-[500px]">
							We take great pride, and put our hearts and soul into each
							project. Take a look at a few we're particularly proud of.
						</p>
					</div>
					{Object.entries(OurProjects).map(([key, project]) => {
						return (
							<main key={key}>
								<div className="relative mx-auto bg-violet-200 flex flex-col lg:flex-row lg:max-h-[450px]">
									<Image
										className="w-full lg:w-1/2 lg:object-cover border"
										width={2400}
										height={340}
										alt="alertit logo"
										src={project.photo}
										priority={true}
									/>
									<Link className="lg:w-1/2" href={`/projects/alertit`}>
										<div className="lg:flex flex-col h-full justify-center text-xl p-12">
											<div className="flex gap-4 items-center mb-6">
												<h1 className="text-4xl">{project.name}</h1>
											</div>
											<p className="text-base">{project.about}</p>
										</div>
									</Link>
									<div className="w-full bg-violet-400 py-8 lg:py-0 flex items-center justify-center gap-5 lg:gap-8 transition-opacity lg:opacity-0 lg:hover:opacity-75 lg:w-1/2 lg:absolute lg:h-full lg:top-0 lg:translate-x-0">
										<Link href={`/projects/alertit`}>
											<VscBook className="h-10 w-10 lg:w-12 lg:h-12" />
										</Link>
										<Link href={project.github}>
											<VscGithubInverted className="h-9 w-9 lg:w-12 lg:h-12" />
										</Link>
									</div>
								</div>
							</main>
						);
					})}
				</div>
			</section>
		</>
	);
}
