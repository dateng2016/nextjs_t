import Card from "@/components/card";
import Link from "next/link";

export default () => {
    return (
        <Card>
            <div>Notifications</div>
            <Link href="/complex-dashboard/archived">Archived</Link>
        </Card>
    );
};
