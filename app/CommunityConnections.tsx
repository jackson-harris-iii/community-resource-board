import {community} from "./community.config";
export default function CommunityConnections(){return <section><p className="eyebrow">OPEN SOURCE · COMMUNITY LED</p><h2>{community.name}</h2><p>A local board for ideas, solutions and practical support.</p><div className="board-actions"><a href={community.repository}>Source code ↗</a><a href="/resources">Research directory →</a></div></section>}
