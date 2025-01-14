import { Models } from './Models';

export interface TabBarPropsType {
  /** call this function to switch tab */
  goToTab: (index: number) => void;
  /** tabs data */
  tabs: Models.TabData[];
  /** current active tab */
  activeTab: number;
  /** use animate | default: true */
  animated: boolean;
  /** render the tab of tabbar */
  renderTab?: (tab: Models.TabData, index: number) => React.ReactNode;
  /** render the underline of tabbar */
  renderUnderline?: (style: React.CSSProperties | any) => React.ReactNode;
  /** page size of tabbar's tab | default: 5 */
  page?: number;
  /** on tab click */
  onTabClick?: (tab: Models.TabData, index: number) => void;
  /** tabBar's position | defualt: top */
  tabBarPosition?: 'top' | 'bottom' | 'left' | 'right';

  // TabBar shortcut settings.
  /** tabBar underline style */
  tabBarUnderlineStyle?: React.CSSProperties | any;
  /** tabBar background color */
  tabBarBackgroundColor?: string;
  /** tabBar active text color */
  tabBarActiveTextColor?: string;
  /** tabBar inactive text color */
  tabBarInactiveTextColor?: string;
  /** tabBar text style */
  tabBarTextStyle?: React.CSSProperties | any;

  instanceId: number,
}

export interface PropsType {
  /** tabs data */
  tabs: Models.TabData[];
  /** TabBar's position | default: top */
  tabBarPosition?: 'top' | 'bottom' | 'left' | 'right';
  /** render for TabBar */
  renderTabBar?: ((props: TabBarPropsType) => React.ReactNode) | false;
  /** initial Tab, index or key */
  initialPage?: number | string;
  /** current tab, index or key */
  page?: number | string;
  /** whether to switch tabs with swipe gestrue in the content | default: true */
  swipeable?: boolean;
  /** use scroll follow pan | default: true */
  useOnPan?: boolean;
  /** pre-render nearby # sibling, Infinity: render all the siblings, 0: render current page | default: 1 */
  prerenderingSiblingsNumber?: number;
  /** whether to change tabs with animation | default: true */
  animated?: boolean;
  /** callback when tab is switched */
  onChange?: (tab: Models.TabData, index: number) => void;
  /** on tab click */
  onTabClick?: (tab: Models.TabData, index: number) => void;
  /** destroy inactive tab | default: false */
  destroyInactiveTab?: boolean;
  /** distance to change tab, width ratio | default: 0.3 */
  distanceToChangeTab?: number;
  /** use paged | default: true */
  usePaged?: boolean;
  /** tab paging direction | default: horizontal */
  tabDirection?: 'horizontal' | 'vertical';

  // TabBar shortcut settings.
  /** tabBar underline style */
  tabBarUnderlineStyle?: React.CSSProperties | any;
  /** tabBar background color */
  tabBarBackgroundColor?: string;
  /** tabBar active text color */
  tabBarActiveTextColor?: string;
  /** tabBar inactive text color */
  tabBarInactiveTextColor?: string;
  /** tabBar text style */
  tabBarTextStyle?: React.CSSProperties | any;
  /** can't render content | default: false */
  noRenderContent?: boolean;
  /** use left instead of transform | default: false */
  useLeftInsteadTransform?: boolean;
}
