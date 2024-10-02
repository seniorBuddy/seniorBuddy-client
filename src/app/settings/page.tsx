import SettingSection from "@/components/settings/setting-main";
import SettingSide from "@/components/settings/setting-side";

export default function Page() {
    return (
        <div className="flex flex-col sm:flex-row">
            <SettingSide />
            <SettingSection />
        </div>
    )
}