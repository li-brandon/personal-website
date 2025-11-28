import { workHistory } from "@/lib/data";

type WorkItem = (typeof workHistory)[number];

function hasMultipleRoles(
  item: WorkItem
): item is Extract<WorkItem, { roles: unknown }> {
  return "roles" in item;
}

export default function WorkTimeline() {
  return (
    <section className="py-12">
      <h2 className="text-xl font-semibold text-white mb-8">Work</h2>

      <div className="space-y-6">
        {workHistory.map((item, index) => (
          <div key={index} className="relative">
            {hasMultipleRoles(item) ? (
              <div className="space-y-3">
                {item.roles.map((role, roleIndex) => (
                  <div
                    key={roleIndex}
                    className="flex items-center gap-4 group"
                  >
                    {roleIndex === 0 && (
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-white/60 font-bold text-lg">
                        {item.company[0]}
                      </div>
                    )}
                    {roleIndex !== 0 && <div className="w-12 shrink-0"></div>}
                    <div className="flex-1 flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">{role.title}</p>
                        <p className="text-white/50 text-sm">{item.company}</p>
                      </div>
                      <p className="text-white/40 text-sm">{role.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 text-white/60 font-bold text-lg">
                  {item.company[0]}
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">{item.role}</p>
                    <p className="text-white/50 text-sm">{item.company}</p>
                  </div>
                  <p className="text-white/40 text-sm italic">{item.period}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

