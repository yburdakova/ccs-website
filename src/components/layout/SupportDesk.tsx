import { HeadsetGlyph } from "@/components/ui/Icons";

export default function SupportDesk() {
  return (
    <button className="support-desk" type="button" disabled title="Support Desk URL pending approval">
      <HeadsetGlyph />
      <span>Support desk</span>
      <small>Link pending</small>
    </button>
  );
}
