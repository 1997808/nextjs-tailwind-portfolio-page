interface PortalShortcutProps {
  icon: React.ElementType;
  name?: string;
}

export function PortalShortcut({ icon: Icon, name }: PortalShortcutProps) {
  return (
    <div className="max-w-[250px] max-h-[160px] rounded overflow-hidden shadow-md transition duration-150 hover:opacity-50">
      <div className="flex flex-col justify-center items-center p-8 gap-2 w-full h-full">
        <Icon className="h-7 w-7" />
        <div className="m-0">{name}</div>
      </div>
    </div>
  );
}

export default PortalShortcut;
