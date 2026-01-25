var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "ch-Operations",
  "level": "1",
  "url": "ch-Operations.html",
  "type": "Chapter",
  "number": "1",
  "title": "Operations",
  "body": " Operations  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-WhatIsAField",
  "level": "1",
  "url": "ch-WhatIsAField.html",
  "type": "Chapter",
  "number": "2",
  "title": "What is a Field?",
  "body": " What is a Field?  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-WhatIsARing",
  "level": "1",
  "url": "ch-WhatIsARing.html",
  "type": "Chapter",
  "number": "3",
  "title": "What is a Ring?",
  "body": " What is a Ring?  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-SpecialRingElements",
  "level": "1",
  "url": "ch-SpecialRingElements.html",
  "type": "Chapter",
  "number": "4",
  "title": "Special Ring Elements",
  "body": " Special Ring Elements  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-Subrings",
  "level": "1",
  "url": "ch-Subrings.html",
  "type": "Chapter",
  "number": "5",
  "title": "Subrings",
  "body": " Subrings  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-Ideals",
  "level": "1",
  "url": "ch-Ideals.html",
  "type": "Chapter",
  "number": "6",
  "title": "Ideals",
  "body": " Ideals  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-QuotientRings",
  "level": "1",
  "url": "ch-QuotientRings.html",
  "type": "Chapter",
  "number": "7",
  "title": "Quotient Rings",
  "body": " Quotient Rings  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-RingHomomorphisms",
  "level": "1",
  "url": "ch-RingHomomorphisms.html",
  "type": "Chapter",
  "number": "8",
  "title": "Ring Homomorphisms",
  "body": " Ring Homomorphisms  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-RingIsomorphismTheorems",
  "level": "1",
  "url": "ch-RingIsomorphismTheorems.html",
  "type": "Chapter",
  "number": "9",
  "title": "Ring Isomorphism Theorems",
  "body": " Ring Isomorphism Theorems  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-TheIntegers",
  "level": "1",
  "url": "ch-TheIntegers.html",
  "type": "Chapter",
  "number": "10",
  "title": "The Integers",
  "body": " The Integers  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-WhatIsAGroup",
  "level": "1",
  "url": "ch-WhatIsAGroup.html",
  "type": "Chapter",
  "number": "11",
  "title": "What is a Group?",
  "body": " What is a Group?  See elsewhere for now. More is coming soon, I promise!  "
},
{
  "id": "ch-Subgroups",
  "level": "1",
  "url": "ch-Subgroups.html",
  "type": "Chapter",
  "number": "12",
  "title": "Subgroups",
  "body": " Subgroups   The learning outcomes in this chapter are to:  ...understand the definition of a subgroup.  ...be able to give several examples of subgroups.  ...use the Subgroup test to shorten the argument showing that a subset is a subgroup.   As is typical in algebra, one definition of a subgroup is that it is a SUB-GROUP. That is, it is a subset of a group that is itself a group. Here's a more formal definition.   Subgroup  Let be a group. A set is a subgroup of if:  The set is a (nonempty) subset of .  If , then so is .  The set together with the operation is a group. That is, it satisfies the axioms of a group: the operation is associative; the operation has an identity element, denoted ; and, every element has an inverse with respect to .     As with subrings, the word nonempty is in parentheses because the emptyset is not a group, and so cannot be a subgroup of any group. The issue is that a group must contain at least one element: the identity element.    Some (possibly most or all) texts use to denote that is a subgroup of . The notation then means that is a proper subgroup of , meaning that and is a subgroup of .    Simplest, always in existence, subgroups  Let be a group with identity element . Then and are subgroups of . Is this clear?    Note that as with subrings, another way to rephrase the second item in the definition of a subgroup is that we say the set is closed under the operation .    Subgroup Test   Let be a group and a nonempty subset of . For any , we let denote the inverse of in . The set is a subgroup of if and only if for all .     First, we assume is a subgroup of and we must show that for all . So let . As is a subgroup of , it is a group, and so the inverse of is an element of , i.e. . As is a subgroup of , it is closed under multiplication and so we have as desired.   Next, we assume for all and we must show that is a subgroup of . To do this, we must show all of the axioms of a subgroup hold. In the hypotheses of the theorem, we were told that is a nonempty subset of , so that requirement is satisfied. For the second requirement, let . then by assumption we have . As , we know . Now, we can see that our hypothesis gives and using the hypothesis one more time gives as desired. For the final subgroup requirement, we must show that satisfies the axioms of a group. This means showing that the operation on is associative, has an identity in , and every element has an inverse in . These tasks are left for the exercises. For the identity part, looking carefully at the middle of this proof may give you what you need.     Often, the notation for the operation in a group is considered to be \"multiplication\" and the operation is written just as concatenation. With that standard, another way to phrase is to say that is a subgroup of if and only if for every , we have .    Recall that every ring is an abelian group under addition. Which of are subgroups of ? of ? of ? Name as many subgroups of as you can.    Let and assume that . Then . Recall that we used in defining the group . Certainly this subgroup claim requires that we allow a function to be thought of as a function by mapping each element to itself.     Complete the missing parts above. They're listed below to help you out!  Explain as briefly as possible by and are subgroups of a group .  Complete the proof of . In particular, you must show that in the backwards direction, we have that associativity holds, that the set has an identity element, and that every element has an inverse in .  Succinctly answer the questions in .  Prove the claim in . That is, prove that is a subgroup of when with .      Here are some basics of groups. Each problem has its own directions.  Let denote the set of invertible matrices with entries in . Recall from Linear Algebra that this is the set . Recall from Exercise 11.B(i) that is a group under matrix multiplication. Find at least three subgroups of this group, and three subsets which are not subgroups and justify your answers.  Let be a group and . The subgroup of generated by is defined as the smallest subgroup of which contains , and denoted . What is the subgroup of generated by ? What about the subgroup generated by and ? What about the subgroup generated by and ?     Prove Lagrange's Theorem for finite groups, which states that if is a (finite) group, and is a subgroup of , then the order of divides the order of .   One way to approach this involves definite cosets of a subgroup. To that end, let be a group and a subgroup of . Define an equivalence relation, , on via if and only if . We define the left cosets of in to be the equivalence classes of the equivalence relation on . With this language, the most common way to state Lagrange's Theorem is that for any group and any subgroup , we have where is the index of in , defined to be the number of left (or right) cosets of in .     For each statement, prove that it is true or give a counter-example to show that it is false.  If is a subgroup of and is abelian, then is abelian.  If is a subgroup of and is non-abelian, then is non-abelian.  If is a subgroup of and is finite, then is finite.        "
},
{
  "id": "ch-Subgroups-2",
  "level": "2",
  "url": "ch-Subgroups.html#ch-Subgroups-2",
  "type": "Objectives",
  "number": "12",
  "title": "The learning outcomes in this chapter are to:",
  "body": " The learning outcomes in this chapter are to:  ...understand the definition of a subgroup.  ...be able to give several examples of subgroups.  ...use the Subgroup test to shorten the argument showing that a subset is a subgroup.  "
},
{
  "id": "ch-Subgroups-4",
  "level": "2",
  "url": "ch-Subgroups.html#ch-Subgroups-4",
  "type": "Definition",
  "number": "12.0.1",
  "title": "Subgroup.",
  "body": " Subgroup  Let be a group. A set is a subgroup of if:  The set is a (nonempty) subset of .  If , then so is .  The set together with the operation is a group. That is, it satisfies the axioms of a group: the operation is associative; the operation has an identity element, denoted ; and, every element has an inverse with respect to .   "
},
{
  "id": "ch-Subgroups-5",
  "level": "2",
  "url": "ch-Subgroups.html#ch-Subgroups-5",
  "type": "Note",
  "number": "12.0.2",
  "title": "",
  "body": " As with subrings, the word nonempty is in parentheses because the emptyset is not a group, and so cannot be a subgroup of any group. The issue is that a group must contain at least one element: the identity element.  "
},
{
  "id": "ch-Subgroups-6",
  "level": "2",
  "url": "ch-Subgroups.html#ch-Subgroups-6",
  "type": "Note",
  "number": "12.0.3",
  "title": "",
  "body": " Some (possibly most or all) texts use to denote that is a subgroup of . The notation then means that is a proper subgroup of , meaning that and is a subgroup of .  "
},
{
  "id": "ch-Subgroups-7",
  "level": "2",
  "url": "ch-Subgroups.html#ch-Subgroups-7",
  "type": "Example",
  "number": "12.0.4",
  "title": "Simplest, always in existence, subgroups.",
  "body": " Simplest, always in existence, subgroups  Let be a group with identity element . Then and are subgroups of . Is this clear?  "
},
{
  "id": "ch-Subgroups-8",
  "level": "2",
  "url": "ch-Subgroups.html#ch-Subgroups-8",
  "type": "Note",
  "number": "12.0.5",
  "title": "",
  "body": " Note that as with subrings, another way to rephrase the second item in the definition of a subgroup is that we say the set is closed under the operation .  "
},
{
  "id": "theorem-subgroup",
  "level": "2",
  "url": "ch-Subgroups.html#theorem-subgroup",
  "type": "Theorem",
  "number": "12.0.6",
  "title": "Subgroup Test.",
  "body": " Subgroup Test   Let be a group and a nonempty subset of . For any , we let denote the inverse of in . The set is a subgroup of if and only if for all .     First, we assume is a subgroup of and we must show that for all . So let . As is a subgroup of , it is a group, and so the inverse of is an element of , i.e. . As is a subgroup of , it is closed under multiplication and so we have as desired.   Next, we assume for all and we must show that is a subgroup of . To do this, we must show all of the axioms of a subgroup hold. In the hypotheses of the theorem, we were told that is a nonempty subset of , so that requirement is satisfied. For the second requirement, let . then by assumption we have . As , we know . Now, we can see that our hypothesis gives and using the hypothesis one more time gives as desired. For the final subgroup requirement, we must show that satisfies the axioms of a group. This means showing that the operation on is associative, has an identity in , and every element has an inverse in . These tasks are left for the exercises. For the identity part, looking carefully at the middle of this proof may give you what you need.   "
},
{
  "id": "ch-Subgroups-10",
  "level": "2",
  "url": "ch-Subgroups.html#ch-Subgroups-10",
  "type": "Remark",
  "number": "12.0.7",
  "title": "",
  "body": " Often, the notation for the operation in a group is considered to be \"multiplication\" and the operation is written just as concatenation. With that standard, another way to phrase is to say that is a subgroup of if and only if for every , we have .  "
},
{
  "id": "example-rings-as-subgroups",
  "level": "2",
  "url": "ch-Subgroups.html#example-rings-as-subgroups",
  "type": "Example",
  "number": "12.0.8",
  "title": "",
  "body": " Recall that every ring is an abelian group under addition. Which of are subgroups of ? of ? of ? Name as many subgroups of as you can.  "
},
{
  "id": "example-subgroups-of-sn",
  "level": "2",
  "url": "ch-Subgroups.html#example-subgroups-of-sn",
  "type": "Example",
  "number": "12.0.9",
  "title": "",
  "body": " Let and assume that . Then . Recall that we used in defining the group . Certainly this subgroup claim requires that we allow a function to be thought of as a function by mapping each element to itself.  "
},
{
  "id": "ch-Subgroups-13-1",
  "level": "2",
  "url": "ch-Subgroups-13.html#ch-Subgroups-13-1",
  "type": "Exercise",
  "number": "12.12.A",
  "title": "",
  "body": " Complete the missing parts above. They're listed below to help you out!  Explain as briefly as possible by and are subgroups of a group .  Complete the proof of . In particular, you must show that in the backwards direction, we have that associativity holds, that the set has an identity element, and that every element has an inverse in .  Succinctly answer the questions in .  Prove the claim in . That is, prove that is a subgroup of when with .    "
},
{
  "id": "ch-Subgroups-13-2",
  "level": "2",
  "url": "ch-Subgroups-13.html#ch-Subgroups-13-2",
  "type": "Exercise",
  "number": "12.12.B",
  "title": "",
  "body": " Here are some basics of groups. Each problem has its own directions.  Let denote the set of invertible matrices with entries in . Recall from Linear Algebra that this is the set . Recall from Exercise 11.B(i) that is a group under matrix multiplication. Find at least three subgroups of this group, and three subsets which are not subgroups and justify your answers.  Let be a group and . The subgroup of generated by is defined as the smallest subgroup of which contains , and denoted . What is the subgroup of generated by ? What about the subgroup generated by and ? What about the subgroup generated by and ?   "
},
{
  "id": "ch-Subgroups-13-3",
  "level": "2",
  "url": "ch-Subgroups-13.html#ch-Subgroups-13-3",
  "type": "Exercise",
  "number": "12.12.C",
  "title": "",
  "body": " Prove Lagrange's Theorem for finite groups, which states that if is a (finite) group, and is a subgroup of , then the order of divides the order of .   One way to approach this involves definite cosets of a subgroup. To that end, let be a group and a subgroup of . Define an equivalence relation, , on via if and only if . We define the left cosets of in to be the equivalence classes of the equivalence relation on . With this language, the most common way to state Lagrange's Theorem is that for any group and any subgroup , we have where is the index of in , defined to be the number of left (or right) cosets of in .   "
},
{
  "id": "ch-Subgroups-13-4",
  "level": "2",
  "url": "ch-Subgroups-13.html#ch-Subgroups-13-4",
  "type": "Exercise",
  "number": "12.12.D",
  "title": "",
  "body": " For each statement, prove that it is true or give a counter-example to show that it is false.  If is a subgroup of and is abelian, then is abelian.  If is a subgroup of and is non-abelian, then is non-abelian.  If is a subgroup of and is finite, then is finite.    "
},
{
  "id": "ch-NormalSubgroups",
  "level": "1",
  "url": "ch-NormalSubgroups.html",
  "type": "Chapter",
  "number": "13",
  "title": "Normal Subgroups",
  "body": " Normal Subgroups   The learning outcomes in this chapter are to:  ...understand the definition of a normal subgroup.  ...be able to give several examples of normal subgroups.  ...understand some important properties of normal subgroups.   Recall that with rings, the definition of an ideal was ideally suited to define quotient rings and have the resulting operations be well-defined. The notion of a normal subgroup is analogous in the sense that we want something ideally suited to define a quotient group and have the operation be well-defined.  Let's think backwards a bit, and work with a group written additively. If is a group, and is a \"normal\" subgroup of , we might want to define the \"cosets\" of , i.e. the elements of the quotient group , to be of the form with . Suppose further that we want the operation on these to be given by for . For this to be well-defined, we'd need that for and , then , i.e., we'd need that whenever and . Because we might be more prone to assuming commutativity in additive notation, and we should be careful about not assuming things we're not given, let's switch now to multiplicative notation!  If is a group written multiplicatively, with identity element , and is a \"normal\" subgroup of , we have \"cosets\" of being of the form . For the operation to be well-defined, we will need to take such that and and need to show that , i.e. that . Being a bit more specific, note that for any , and fix some and . For the operation to be well-defined in this specific instance, we'll need that , i.e. we need that . Recall from Exercise 11.C.i that for any . Also, note that the identity element is always its own inverse. Now, note that for the operation to be well-defined, we need that is an element of . We're ready for the definition of a normal subgroup now, as we'll create that definition to make this work.    Normal Subgroup  Let be a group and a subset of . We say that is a normal subgroup of , and denote this as , if is a subgroup of and for every and , we have that as well.   The code to obtain the symbol is \\lhd .   Subgroups of \"our\" Favorite Abelian Group  Our favorite abelian group might be , and our favorite subgroup of this is probably where is our favorite nonzero integer. As uses additive notation, for to be a normal subgroup of , we'd need that whenever and . This is \"easily\" seen to work, as the commutativity of the operation allows for us to rewrite this as .    Normals in Abelian Groups   The example above seems to imply that every subgroup of an abelian group is normal. We should probably prove that!   Since every subgroup of an abelian group is normal, we should really look at a non-abelian example too:   Normal Subgroup of  Our smallest non-abelian group is . Consider the set . We can see, although you should ask yourself how, from this smaller part of the group table for that is a subgroup of :  A Normal Subgroup of                                 To check that it is normal, we need that for every and every . Note that it is clear that if , so we really only need to test this for . You should do these computations to get more comfortable with cycle notation for elements of a permutation group.   Let be a group written multiplicatively and a subgroup of . Recall that the left cosets of in are the sets of the form . We can similarly define the right cosets of in to be the sets of the form .   Normal Subgroup Equivalent Statements  Let be a group and a subgroup of . The following are equivalent: The subgroup is a normal subgroup of .  For every , we have . Note that this is a claim about set equality.  For every , we have where denotes the set of all elements of the form with . Note that the claim is also a claim about set equality.   The equivalence of the first two items above is typically phrased to say that \"A subgroup is normal if and only if its left and right cosets are the same.\"  Recall that when is a finite group, is the order of the group and defined to be the number of elements of . Also, recall from Exercise 12.C that if is a finite group and is a subgroup of , then the order of divides the order of .   Index of a Subgroup  Let be a subgroup of a finite group . We call the quotient the index of in and denote it by .    Index 2 Subgroups  Let be a finite group. If is a subgroup of of index , then is a normal subgroup of .   I'd like for \"us\" to prove this. However, maybe we'll delay on a complete proof for now. Here's a sketch to get you started. Of course, we need to assume that is a subgroup of and that has index . Our goal\/task is to show that is normal, which, by , we can do by proving for every . So let . There are two possibilities: If , then as is a subgroup of .  if , then and . As has index in , then is half of the elements of and the other half must be both and so that as desired.      Complete the missing parts above. They're listed below to help you out!  Let be an abelian group and any subgroup of . Prove that is a normal subgroup of .  Do the computations necessary to show that . Note that there are 3 choices for and only two interesting choices for . For your own benefit of learning, it would be best if you did this without the Cayley table for the group and only used cycle notation for the computations!  Prove . Note that to do this, it suffices to show one of the following chains of implications: or . It's unclear to me which of these you'll find easier.     Here are some basics of normal subgroups. Each exercise has its own instructions.  On the Final Exam in Spring 2025, you identified all six subgroups of . They were: , and . Which of these are normal and which are not normal? If you took the course in Fall 2025, you might want to first check that this is indeed an exhaustive list of subgroups of .  In Exercise 12.B.ii you identified some subgroups of . You'll need to scroll on the last one to see the whole thing unless your browser window is sufficiently wide:   Which of these are normal and which are not?      As with the ideals chapter, we'll skip this as it was split from the subgroups chapter to ensure a shorter lecture.    "
},
{
  "id": "ch-NormalSubgroups-2",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-2",
  "type": "Objectives",
  "number": "13",
  "title": "The learning outcomes in this chapter are to:",
  "body": " The learning outcomes in this chapter are to:  ...understand the definition of a normal subgroup.  ...be able to give several examples of normal subgroups.  ...understand some important properties of normal subgroups.  "
},
{
  "id": "ch-NormalSubgroups-6",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-6",
  "type": "Definition",
  "number": "13.0.1",
  "title": "Normal Subgroup.",
  "body": " Normal Subgroup  Let be a group and a subset of . We say that is a normal subgroup of , and denote this as , if is a subgroup of and for every and , we have that as well.  "
},
{
  "id": "ch-NormalSubgroups-7",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-7",
  "type": "Note",
  "number": "13.0.2",
  "title": "",
  "body": "The code to obtain the symbol is \\lhd . "
},
{
  "id": "ch-NormalSubgroups-8",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-8",
  "type": "Example",
  "number": "13.0.3",
  "title": "Subgroups of \"our\" Favorite Abelian Group.",
  "body": " Subgroups of \"our\" Favorite Abelian Group  Our favorite abelian group might be , and our favorite subgroup of this is probably where is our favorite nonzero integer. As uses additive notation, for to be a normal subgroup of , we'd need that whenever and . This is \"easily\" seen to work, as the commutativity of the operation allows for us to rewrite this as .  "
},
{
  "id": "theorem-normal-abelian-subgroups",
  "level": "2",
  "url": "ch-NormalSubgroups.html#theorem-normal-abelian-subgroups",
  "type": "Theorem",
  "number": "13.0.4",
  "title": "Normals in Abelian Groups.",
  "body": " Normals in Abelian Groups   The example above seems to imply that every subgroup of an abelian group is normal. We should probably prove that!  "
},
{
  "id": "normal-subgroup-of-S3",
  "level": "2",
  "url": "ch-NormalSubgroups.html#normal-subgroup-of-S3",
  "type": "Example",
  "number": "13.0.5",
  "title": "Normal Subgroup of <span class=\"process-math\">\\(S_3\\)<\/span>.",
  "body": " Normal Subgroup of  Our smallest non-abelian group is . Consider the set . We can see, although you should ask yourself how, from this smaller part of the group table for that is a subgroup of :  A Normal Subgroup of                                 To check that it is normal, we need that for every and every . Note that it is clear that if , so we really only need to test this for . You should do these computations to get more comfortable with cycle notation for elements of a permutation group.  "
},
{
  "id": "ch-NormalSubgroups-12",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "left cosets right cosets "
},
{
  "id": "theorem-normal-subgroup-equivalences",
  "level": "2",
  "url": "ch-NormalSubgroups.html#theorem-normal-subgroup-equivalences",
  "type": "Theorem",
  "number": "13.0.7",
  "title": "Normal Subgroup Equivalent Statements.",
  "body": " Normal Subgroup Equivalent Statements  Let be a group and a subgroup of . The following are equivalent: The subgroup is a normal subgroup of .  For every , we have . Note that this is a claim about set equality.  For every , we have where denotes the set of all elements of the form with . Note that the claim is also a claim about set equality.  "
},
{
  "id": "ch-NormalSubgroups-15",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-15",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order "
},
{
  "id": "ch-NormalSubgroups-16",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-16",
  "type": "Definition",
  "number": "13.0.8",
  "title": "Index of a Subgroup.",
  "body": " Index of a Subgroup  Let be a subgroup of a finite group . We call the quotient the index of in and denote it by .  "
},
{
  "id": "ch-NormalSubgroups-17",
  "level": "2",
  "url": "ch-NormalSubgroups.html#ch-NormalSubgroups-17",
  "type": "Theorem",
  "number": "13.0.9",
  "title": "Index 2 Subgroups.",
  "body": " Index 2 Subgroups  Let be a finite group. If is a subgroup of of index , then is a normal subgroup of .   I'd like for \"us\" to prove this. However, maybe we'll delay on a complete proof for now. Here's a sketch to get you started. Of course, we need to assume that is a subgroup of and that has index . Our goal\/task is to show that is normal, which, by , we can do by proving for every . So let . There are two possibilities: If , then as is a subgroup of .  if , then and . As has index in , then is half of the elements of and the other half must be both and so that as desired.   "
},
{
  "id": "ch-NormalSubgroups-18-1",
  "level": "2",
  "url": "ch-NormalSubgroups-18.html#ch-NormalSubgroups-18-1",
  "type": "Exercise",
  "number": "13.13.A",
  "title": "",
  "body": " Complete the missing parts above. They're listed below to help you out!  Let be an abelian group and any subgroup of . Prove that is a normal subgroup of .  Do the computations necessary to show that . Note that there are 3 choices for and only two interesting choices for . For your own benefit of learning, it would be best if you did this without the Cayley table for the group and only used cycle notation for the computations!  Prove . Note that to do this, it suffices to show one of the following chains of implications: or . It's unclear to me which of these you'll find easier.   "
},
{
  "id": "ch-NormalSubgroups-18-2",
  "level": "2",
  "url": "ch-NormalSubgroups-18.html#ch-NormalSubgroups-18-2",
  "type": "Exercise",
  "number": "13.13.B",
  "title": "",
  "body": " Here are some basics of normal subgroups. Each exercise has its own instructions.  On the Final Exam in Spring 2025, you identified all six subgroups of . They were: , and . Which of these are normal and which are not normal? If you took the course in Fall 2025, you might want to first check that this is indeed an exhaustive list of subgroups of .  In Exercise 12.B.ii you identified some subgroups of . You'll need to scroll on the last one to see the whole thing unless your browser window is sufficiently wide:   Which of these are normal and which are not?    "
},
{
  "id": "ch-NormalSubgroups-18-3",
  "level": "2",
  "url": "ch-NormalSubgroups-18.html#ch-NormalSubgroups-18-3",
  "type": "Exercise",
  "number": "13.13.C",
  "title": "",
  "body": " As with the ideals chapter, we'll skip this as it was split from the subgroups chapter to ensure a shorter lecture.  "
},
{
  "id": "ch-QuotientGroups",
  "level": "1",
  "url": "ch-QuotientGroups.html",
  "type": "Chapter",
  "number": "14",
  "title": "Quotient Groups",
  "body": " Quotient Groups   The learning outcomes in this chapter are to:  ...understand the definition of a quotient group.  ...be able to give several examples of quotient groups.  ...be able to explain why quotient groups are groups.  ...understand why normal subgroups are the necessary type of subgroup to \"mod out\" by.  ...understand that quotient groups and quotient rings are analogous structures.   Let’s start off with working on drawing parallels between quotient rings and quotient groups. In particular, it would be good to have a better understanding of the cosets of a normal subgroup of a group and their relationship with cosets of an ideal of a ring.  Recall (probably from Math 301) that equivalence relations define a partition on a set, and a partition of a set defines an equivalence relation. In ring land, we first defined an equivalence relation, and defined our cosets to be the equivalence classes that form the associated partition. Since we already have a definition of cosets for groups, perhaps we should think about things in reverse here by showing our cosets form a partition and “reverse engineering” the equivalence relation out of that.    Let be a group and a subgroup of . Then, the left cosets of form a partition of , i.e., and for , either or .    Let be a group and a subgroup of . As for every , then the containment holds. To see that we have equality, let and note that since , we have so that as well. What remains then is to let , assume that and show that . So let and write for some . Also, since , we know there is some . Write for some . Multiplying on the right by yields . Thus, . Since , we know and so , which shows that . A similar argument shows that so that as desired.    Now that we know the left cosets of a normal subgroup form a partition of the group, we know there is an associated equivalence relation. Let's work out the details of that. Let denote the set of a partition which contains the element . The equivalence relation defined from a partition is . Using the notation we have for the cosets, this becomes and so our equivalence relation boils down to being which, we might have guessed based on the equivalence relation for ideals.    Let be a group, a normal subgroup of , and define an operation on the left cosets of via . With this operation, the set of left cosets is a group, denoted and pronounced \"G mod N.\"    I'm going to leave this whole proof to you. Make sure you show all of the necessary parts: the claimed operation is well-defined, the operation is associative, the operation has an identity element, and every element has an inverse. Don't forget that the set on which this operation is defined is the set of left cosets: .      Let be a group and a normal subgroup of . Then the group is called a quotient group of .     Consider the group and the normal subgroup of , which we'll denote . We should figure out if is a group we've seen before by computing its elements and a Cayley table for the group. We'll fill in this table during class and create the Cayley table. Afterwards, I'll update these notes with the answer(s). We'll know we've got all the cosets when every element of the group is in a coset. We will ensure we only have one representative of each coset by only listing each element once.      Complete the missing parts above. Tehy're listed below to help you out!  Prove . It may help to look back on our proof of Theorem 7.4.  What group does look an awful lot like? How might we convince ourselves that these are the same group?        Here are some basics of quotient groups. Each problem has its own directions.  (Bonus!) As with rings, if is a subgroup of and is not a normal subgroup, things can go terribly wrong. Identify a non-normal subgroup of which I'll call . Then identify an element such that . Conclude that the operation on the quotient of by the non-normal subgroup you've identified is not well-defined by demonstrating an explicit example. For which elements of is it the case that ?  The center of a group is the subgroup . This notation comes from the word \"zentrum\" which is Gemran for center. Prove that for any group , we have is a normal subgroup of , so that is always a group.  Let be a group and a subgroup of . The normalizer of in is the set , i.e. the largest subgroup of containing in which is normal. Compute for and .        Let be a finite group and a normal subgroup of . Prove that , that is, the order of is the index of in .      Let be an abelian group and a subgroup of . Prove that is abelian. Also, give an example of a non-abelian group and normal subgroup such that is abelian.      Prove that for all      "
},
{
  "id": "ch-QuotientGroups-2",
  "level": "2",
  "url": "ch-QuotientGroups.html#ch-QuotientGroups-2",
  "type": "Objectives",
  "number": "14",
  "title": "The learning outcomes in this chapter are to:",
  "body": " The learning outcomes in this chapter are to:  ...understand the definition of a quotient group.  ...be able to give several examples of quotient groups.  ...be able to explain why quotient groups are groups.  ...understand why normal subgroups are the necessary type of subgroup to \"mod out\" by.  ...understand that quotient groups and quotient rings are analogous structures.  "
},
{
  "id": "prop-CosetsPartition",
  "level": "2",
  "url": "ch-QuotientGroups.html#prop-CosetsPartition",
  "type": "Proposition",
  "number": "14.0.1",
  "title": "",
  "body": "  Let be a group and a subgroup of . Then, the left cosets of form a partition of , i.e., and for , either or .    Let be a group and a subgroup of . As for every , then the containment holds. To see that we have equality, let and note that since , we have so that as well. What remains then is to let , assume that and show that . So let and write for some . Also, since , we know there is some . Write for some . Multiplying on the right by yields . Thus, . Since , we know and so , which shows that . A similar argument shows that so that as desired.   "
},
{
  "id": "thm-QuotientGroupsareGroups",
  "level": "2",
  "url": "ch-QuotientGroups.html#thm-QuotientGroupsareGroups",
  "type": "Theorem",
  "number": "14.0.2",
  "title": "",
  "body": "  Let be a group, a normal subgroup of , and define an operation on the left cosets of via . With this operation, the set of left cosets is a group, denoted and pronounced \"G mod N.\"    I'm going to leave this whole proof to you. Make sure you show all of the necessary parts: the claimed operation is well-defined, the operation is associative, the operation has an identity element, and every element has an inverse. Don't forget that the set on which this operation is defined is the set of left cosets: .   "
},
{
  "id": "def-QuotientGroupDefn",
  "level": "2",
  "url": "ch-QuotientGroups.html#def-QuotientGroupDefn",
  "type": "Definition",
  "number": "14.0.3",
  "title": "",
  "body": "  Let be a group and a normal subgroup of . Then the group is called a quotient group of .   "
},
{
  "id": "ch-QuotientGroups-9",
  "level": "2",
  "url": "ch-QuotientGroups.html#ch-QuotientGroups-9",
  "type": "Example",
  "number": "14.0.4",
  "title": "",
  "body": " Consider the group and the normal subgroup of , which we'll denote . We should figure out if is a group we've seen before by computing its elements and a Cayley table for the group. We'll fill in this table during class and create the Cayley table. Afterwards, I'll update these notes with the answer(s). We'll know we've got all the cosets when every element of the group is in a coset. We will ensure we only have one representative of each coset by only listing each element once.  "
},
{
  "id": "exercises-QuotientGroups-1",
  "level": "2",
  "url": "exercises-QuotientGroups.html#exercises-QuotientGroups-1",
  "type": "Exercise",
  "number": "14.14.A",
  "title": "",
  "body": "  Complete the missing parts above. Tehy're listed below to help you out!  Prove . It may help to look back on our proof of Theorem 7.4.  What group does look an awful lot like? How might we convince ourselves that these are the same group?     "
},
{
  "id": "exercises-QuotientGroups-2",
  "level": "2",
  "url": "exercises-QuotientGroups.html#exercises-QuotientGroups-2",
  "type": "Exercise",
  "number": "14.14.B",
  "title": "",
  "body": "  Here are some basics of quotient groups. Each problem has its own directions.  (Bonus!) As with rings, if is a subgroup of and is not a normal subgroup, things can go terribly wrong. Identify a non-normal subgroup of which I'll call . Then identify an element such that . Conclude that the operation on the quotient of by the non-normal subgroup you've identified is not well-defined by demonstrating an explicit example. For which elements of is it the case that ?  The center of a group is the subgroup . This notation comes from the word \"zentrum\" which is Gemran for center. Prove that for any group , we have is a normal subgroup of , so that is always a group.  Let be a group and a subgroup of . The normalizer of in is the set , i.e. the largest subgroup of containing in which is normal. Compute for and .     "
},
{
  "id": "exercises-QuotientGroups-3",
  "level": "2",
  "url": "exercises-QuotientGroups.html#exercises-QuotientGroups-3",
  "type": "Exercise",
  "number": "14.14.C",
  "title": "",
  "body": "  Let be a finite group and a normal subgroup of . Prove that , that is, the order of is the index of in .   "
},
{
  "id": "exercises-QuotientGroups-4",
  "level": "2",
  "url": "exercises-QuotientGroups.html#exercises-QuotientGroups-4",
  "type": "Exercise",
  "number": "14.14.D",
  "title": "",
  "body": "  Let be an abelian group and a subgroup of . Prove that is abelian. Also, give an example of a non-abelian group and normal subgroup such that is abelian.   "
},
{
  "id": "exercises-QuotientGroups-5",
  "level": "2",
  "url": "exercises-QuotientGroups.html#exercises-QuotientGroups-5",
  "type": "Exercise",
  "number": "14.14.E",
  "title": "",
  "body": "  Prove that for all    "
},
{
  "id": "ch-GroupHomomorphisms",
  "level": "1",
  "url": "ch-GroupHomomorphisms.html",
  "type": "Chapter",
  "number": "15",
  "title": "Group Homomorphisms",
  "body": " Group Homomorphisms  Coming soon!  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
