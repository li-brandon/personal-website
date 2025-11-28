import { workHistory } from "@/lib/data";

type WorkItem = (typeof workHistory)[number];

function hasMultipleRoles(
  item: WorkItem
): item is Extract<WorkItem, { roles: unknown }> {
  return "roles" in item;
}

export default function WorkTimeline() {
  return (
    <section className="py-16 border-t border-white/5">
      <h2 className="text-2xl font-bold text-white mb-10">Work</h2>

      <div className="space-y-8">
        {workHistory.map((item, index) => (
          <div key={index} className="relative">
            {hasMultipleRoles(item) ? (
              <div className="space-y-4">
                {item.roles.map((role, roleIndex) => (
                  <div
                    key={roleIndex}
                    className="flex items-center gap-5 group"
                  >
                    {roleIndex === 0 && (
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 text-white/50 font-bold text-xl group-hover:border-emerald-500/20 transition-colors">
                        {item.company[0]}
                      </div>
                    )}
                    {roleIndex !== 0 && <div className="w-14 shrink-0"></div>}
                    <div className="flex-1 flex items-center justify-between py-2">
                      <div>
                        <p className="text-white font-medium">{role.title}</p>
                        <p className="text-white/40 text-sm">{item.company}</p>
                      </div>
                      <p className="text-white/30 text-sm tabular-nums">{role.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center shrink-0 text-white/50 font-bold text-xl group-hover:border-emerald-500/20 transition-colors">
                  {item.company[0]}
                </div>
                <div className="flex-1 flex items-center justify-between py-2">
                  <div>
                    <p className="text-white font-medium">{item.role}</p>
                    <p className="text-white/40 text-sm">{item.company}</p>
                  </div>
                  <p className="text-white/30 text-sm tabular-nums italic">{item.period}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
