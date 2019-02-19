#Actions

Actions are just things that happen *(seriously, that's it)*
- Most actions are user events (clicked a button, submitted a form, etc...)
- Can also be other events such as an API call returning data

### Actions are (usually) made up of two parts


***type*** describes the action that occurred
```$xslt
PREFERENCES_SELECTED
```

***payload*** *(optional)* any extra data that is needed
```$xslt
{
    gender: "Women",
    collection: "Party",
    color: "Patterns"
}
```

## Actions vs Action Creators

Action creators are functions that create objects, actions are the objects that get created

**Action creator**
```$xslt
export default function () {
    return (
        gender: "Women",
        collection: "Party",
        color: "Patterns"
    )
}
```

**Action**
```$xslt
{
    gender: "Women",
    collection: "Party",
    color: "Patterns"
}
```

## What happens next?

All actions are automatically sent to **all** reducers. It is the reducers job to determine how to handle that action 
(can also just ignore it).