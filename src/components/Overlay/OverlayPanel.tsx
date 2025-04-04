import React from 'react';
import { Tab } from '@headlessui/react';
import GoldTracker from './GoldTracker';
import StreakTracker from './StreakTracker';
import GoldCurveGraph from './GoldCurveGraph';
import ItemCheatSheet from './ItemCheatSheet';
import PinnedComps from './PinnedComps';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const OverlayPanel: React.FC = () => {
  return (
    <aside className="bg-backdrop/90 text-white p-4 rounded-lg shadow-overlay fixed top-5 right-5 z-50 w-96 font-sans">
      <Tab.Group>
        <Tab.List className="flex gap-2 mb-4">
          {['Gold', 'Items', 'Comps'].map((tab, idx) => (
            <Tab
              key={idx}
              className={({ selected }) =>
                classNames(
                  'px-3 py-1 text-sm font-semibold rounded-md',
                  selected
                    ? 'bg-tftPurple text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <div className="space-y-2">
              <GoldTracker gold={0} />
              <StreakTracker streak={0} />
              <GoldCurveGraph goldHistory={[]} />
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <ItemCheatSheet />
          </Tab.Panel>
          <Tab.Panel>
            <PinnedComps />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </aside>
  );
};

export default OverlayPanel;
