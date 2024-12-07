<h1 style="text-align:center">
  useCalendar
</h1>
<p style="text-align:center">
  React Hooks to manage calendar states.
</p>

## Usage

### `useCalendar`

You can display & update states with this hook above.

```tsx
import useCalendar from "@nwleedev/use-calendar"

const now = new Date()

export default function App() {
  const {date, months onMonthChange, onYearChange} = useCalendar({
    defaultValue: now
  })
}
```

### `useCalendarContext`

You can share calendar states in deeply nested components.

- You must wrap your components with `CalendarProvider`

```tsx
import {
  useCalendarContext,
  useCalendar,
  CalendarProvider
} from '@nwleedev/use-calendar'

export default function App() {
  const methods = useCalendar()

  return (
    <CalendarProvider value={methods}>
      <NestedCalendar />
    </CalendarProvider>
  )
}
```

### `libs/*`

You can use helper methods to get calendar values

- `CalendarLibs`

  - `createBeforeDays`
  - `createAfterDays`
  - `createMonthDays`
  - `createYearMonths`
  - `createDecadeYears`
  - `createFullDecades`

- `DateLibs`
  - `isYearEqual`
  - `isMonthEqual`
  - `isDateEqual`
  - `isDayEqual`
  - `createDefaultDate`
  - `toDecade`
  - `toCentury`

## Libraries Used

- pnpm workspaces
- tsup
- changesets
