import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FileText } from "lucide-react";
import { useState } from "react";

// The SVG for the Discord icon from Simple Icons.
const SimpleDiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <title>Discord</title>
    <path d="M20.2 3.4c-1.5-1.1-3.6-1.5-5.6-1.5-.7 0-1.4.1-2.1.3-1.4.6-2.6 1.6-3.7 2.9-.6.7-1.1 1.5-1.5 2.4-1.1 2.5-1.5 5.2-1.2 7.8.2 1.3.6 2.6 1.2 3.8.7 1.4 1.6 2.5 2.7 3.6.4.4.9.8 1.4 1.1 1.3.8 2.6 1.4 4 1.7.9.2 1.8.3 2.7.3.7 0 1.5-.1 2.2-.3 1.4-.4 2.6-.9 3.8-1.7.9-.6 1.7-1.3 2.4-2.1.9-1.2 1.5-2.6 1.9-4.1.4-1.7.5-3.5.3-5.2-.2-2.1-.8-4.1-1.9-5.9zM8.3 16.5c-1.1 0-2-.8-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm7.4 0c-1.1 0-2-.8-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);

// This is a complete, self-contained component for a privacy policy dialog.
// It's a great example of how to use Shadcn's Dialog component.
export default function PrivacyPolicyDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* The DialogTrigger wraps the element that opens the dialog. 
          Here we use a Button, but it could be any element. */}
      <DialogTrigger asChild>
        <Button variant="ghost">
          <FileText className="mr-2 h-4 w-4" /> Privacy Policy
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        {/* The DialogHeader contains the title and description of the dialog. */}
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription>
            Your privacy is important to us. This policy outlines how we handle your data.
          </DialogDescription>
        </DialogHeader>
        {/* The main content of the privacy policy goes here.
            Use a scrollable div for long text to ensure it's readable. */}
        <div className="prose max-h-[60vh] overflow-y-auto">
          <p className="text-sm text-gray-600">
            **Last Updated: August 17, 2025**
          </p>
          <p className="text-sm">
            This Privacy Policy describes Our policies and procedures on the collection,
            use and disclosure of Your information when You use the Service and tells
            You about Your privacy rights and how the law protects You.
          </p>
          <h4 className="font-semibold text-base mt-4 mb-2">
            What Information We Collect
          </h4>
          <p className="text-sm">
            We collect personal information that You voluntarily provide to us when You register
            on the Services, express an interest in obtaining information about us or our products
            and Services, when You participate in activities on the Services or otherwise when You
            contact us.
          </p>
          <h4 className="font-semibold text-base mt-4 mb-2">
            How We Use Your Information
          </h4>
          <p className="text-sm">
            We use personal information collected via our Services for a variety of business purposes described
            below. We use the information we collect or receive: to facilitate account creation and logon process;
            to send You marketing and promotional communications; and for other business purposes.
          </p>
          <h4 className="font-semibold text-base mt-4 mb-2">
            Your Privacy Rights
          </h4>
          <p className="text-sm">
            You may review, change, or terminate Your account at any time. You have the right to request access
            to, and correction or deletion of, Your personal data.
          </p>
          <h4 className="font-semibold text-base mt-4 mb-2">
            Contact Us
          </h4>
          <div className="text-sm">
            <p className="mb-2">
              If you have questions or comments about this privacy policy, the best way to contact us is by
              joining our Discord server.
            </p>
            <a
              href="https://discord.gg/your-invite-link" // Replace this with your actual Discord invite link!
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <SimpleDiscordIcon className="h-5 w-5" />
              <span>Join our Discord Server</span>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
