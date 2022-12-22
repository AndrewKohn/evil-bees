import OurProjects from "../../content/projects.json";
import Image from "next/image";
import Link from "next/link";
import ButtonGit from "../ButtonGit";

function ProjectShort() {
	return (
		<>
			{Object.entries(OurProjects).map(([key, project]) => {
				return (
					<section className="mx-auto xl:max-w-7xl" key={key}>
						<div className="flex flex-col lg:flex-row md:items-center gap-4 lg:gap-10 my-8 xl:my-16">
							<div>
								<Image
									className="rounded-lg lg:w-[1000px]"
									width="470"
									height="200"
									src={project.photo}
								/>
							</div>
							<div className="flex flex-col justify-around lg:justify-center lg:gap-10 pb-4 lg:py-12 gap-4 w-full md:max-w-[400px]">
								<h3 className="text-3xl ">{project.name}</h3>
								<ButtonGit
									linkTo="https://github.com/Evil-Bees/Alertit/issues"
									text="Check out issues on"
								/>
								<Link
									href={project.url}
									className="flex items-center gap-4 bg-discord-purple text-white justify-center py py-4 px-6 min-w-[250px] rounded-md hover:animate-pulse"
								>
									See it in live!
								</Link>
							</div>
						</div>
					</section>
				);
			})}
		</>
	);
}

export default ProjectShort;