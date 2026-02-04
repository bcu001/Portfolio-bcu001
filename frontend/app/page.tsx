import CustomBox from "@/components/ui/customBox";
import { DATA } from "@/lib/data/resume";

export default function Home() {
  return (
    <main className="border border-red-500 w-full min-h-dvh px-4 pt-6 space-y-10">
      <section>
        <div className="font-bold text-3xl">Hi, I&apos;m Bhuwan</div>
        <div className="text-xl">{DATA.description}</div>
      </section>
      <section>
        <div className="font-bold text-2xl">About</div>
        <div className="text-xl">{DATA.summary}</div>
      </section>

      <section>
        <div className="font-bold text-2xl">Skills</div>
        <div className="flex flex-wrap gap-2">
          {DATA.skills.map((skill) => {
            return <CustomBox key={skill} text={skill} />;
          })}
        </div>
      </section>
      <section>
        <div className="flex items-center justify-center font-bold">
          <CustomBox text="My projects" />
        </div>
      </section>
    </main>
  );
}
