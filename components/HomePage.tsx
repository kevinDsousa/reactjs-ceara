import { EventsSection } from "@/components/EventsSection";
import { Footer } from "@/components/Footer";
import { GithubIcon } from "@/components/GithubIcon";
import { Header } from "@/components/Header";
import { HighlightedEventSection } from "@/components/HighlightedEventSection";
import { Community } from "@/types/community";
import { Event } from "@/types/event";
import { Partner } from "@/types/partner";
import { Person } from "@/types/person";
import Image from "next/image";
import { CommunityText } from "./CommunityText";

type Props = {
  highlightedEvent?: Event;
  events: Event[];
  community?: Community;
  organizers: Person[];
  partners: Partner[];
};

export const HomePage = ({
  highlightedEvent,
  events,
  organizers,
  partners,
  community,
}: Props) => {
  return (
    <div>
      <Header />
      {highlightedEvent && <HighlightedEventSection event={highlightedEvent} />}
      <EventsSection events={events} />
      <section>
        <div className="px-8 py-16 lg:mx-auto lg:max-w-3xl lg:px-0">
          <h2 className="mb-8 text-center text-2xl text-sky-700">
            A comunidade
          </h2>
          {community && <CommunityText text={community.text.json} />}
          <h3 className="mb-8 text-center text-sm uppercase text-slate-500">
            Organizadores
          </h3>
          <ul className=" flex flex-col gap-4 sm:flex-row sm:items-stretch sm:justify-center">
            {organizers.map((organizer) => (
              <li
                key={organizer.id}
                className="flex items-center space-x-2 rounded-2xl border border-gray-200 p-4 sm:flex-col sm:space-x-0 sm:space-y-2"
              >
                {organizer.avatar?.url && (
                  <div className="relative h-20 w-20 overflow-hidden rounded-full sm:h-24 sm:w-24">
                    <Image
                      src={organizer.avatar?.url || ""}
                      alt={organizer.name || ""}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h5 className="text-lg text-gray-700 sm:text-center">
                    {organizer.name}
                  </h5>
                  <p className="text-sm text-gray-500">{organizer.jobTitle}</p>
                  {organizer.github && (
                    <p className="mt-2 flex items-center text-sm  text-slate-500">
                      <GithubIcon className="mr-1 h-4 w-4 fill-gray-500" />
                      <a
                        href={`https://github.com/${organizer.github}`}
                        target="_blank"
                      >
                        {organizer.github}
                      </a>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center  text-gray-700">
            Quer contribuir com a comunidade?
          </p>
          <p className="text-center text-gray-700">
            <a href="https://www.instagram.com/reactjsceara/" target="_blank">
              Envie um direct para{" "}
              <span className="text-pink-700">instagram.com/reactjsceara</span>
            </a>
          </p>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="px-8 py-16 lg:mx-auto lg:max-w-3xl lg:px-0">
          <h2 className="mb-8 text-center text-2xl text-sky-700">Parceiros</h2>
          <ul className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            {partners.map((partner) => (
              <li key={partner.id}>
                {partner.logo?.url && (
                  <Image
                    src={partner.logo?.url || ""}
                    alt={partner.name || ""}
                    title={partner.name}
                    width={180}
                    height={180}
                    className="object-cover"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};
