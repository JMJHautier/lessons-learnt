**Pour ajouter une fonction:** 
* alt F11
* ajouter un module



# compter les cellules avec un fond coloré
`
Function COLORCOUNT(CountRange As Range, FillCell As Range)
Dim FillColor As Integer
Dim Count As Integer
FillColor = FillCell.Interior.ColorIndex
For Each c In CountRange
    If c.Interior.ColorIndex = FillColor Then
        Count = Count + 1
    End If
Next c
COLORCOUNT = Count
End Function
`
