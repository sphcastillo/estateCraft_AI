//realtime subscription hook
'use client'
import { db } from "@/firebase";
import { useUser } from "@clerk/nextjs";
import { collection, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

// # of docs the user is allowed to have
const PRO_LIMIT = 25;
const FREE_LIMIT = 2;

function useSubscription() {
  const [hasActiveMembership, setHasActiveMembership] = useState(null);
  const [isOverFileLimit, setIsOverFileLimit] = useState(false);
  // user status
  const { user } = useUser();

  //  Realtime listener: Listen to the User document
  const [snapshot, loading, error] = useDocument(
    // if there is a user, get the user document
    // pull open database 
    user && doc(db, "users", user.id),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  // Realtime listener: Listen to the users files collection
  const [filesSnapshot, filesLoading] = useCollection(
    // all the files 
    user && collection(db, "users", user?.id, "files")
  );

  // listen to active membership and toggle state
    // if there is change on database - it will reflect on the UI
  useEffect(() => {
    // is there is no user document ~ return
    if (!snapshot) return;

    const data = snapshot.data();
    if(!data) return;

    setHasActiveMembership(data.hasActiveMembership);

  }, [snapshot]);


  // check if user is over file limit
  useEffect(() => {
    // if it hasn't yet loaded or there are no files
    if(!filesSnapshot || hasActiveMembership === null) return;

    
    const files = filesSnapshot.docs;
    const fileCount = files.length;
    console.log('fileCount: ', fileCount);
    // if the user has active membership ~ they will be allocated the PRO_LIMIT
    const usersLimit = hasActiveMembership ? PRO_LIMIT : FREE_LIMIT;
    console.log(
      "Checking if user is over file limit: fileCount ~ userLimit: ",
      fileCount,
      usersLimit
    );

    setIsOverFileLimit(fileCount >= usersLimit);
  }, [filesSnapshot, hasActiveMembership, PRO_LIMIT, FREE_LIMIT]);

  return { hasActiveMembership, loading, error, isOverFileLimit, filesLoading };
}

export default useSubscription;