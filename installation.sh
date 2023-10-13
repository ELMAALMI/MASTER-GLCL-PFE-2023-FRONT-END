#mise a jour du systeme
apt update -y
apt upgrade -y
#installtion du java
apt-get install default-jdk -y
#installtion du scala
apt-get install scala -y
# telechargement du spark
wget https://archive.apache.org/dist/spark/spark-3.3.1/spark-3.3.1-bin-hadoop3.tgz
#decompresé le fichier
tar -xvzf spark-3.3.1-bin-hadoop3.tgz
#déplacer le fichier décompresé verre /opt
mv spark-3.3.1-bin-hadoop3 /opt/spark

# ajouter spark dans les variable env 
nano ~/.bashrc

export SPARK_HOME=/opt/spark
export PATH=$PATH:$SPARK_HOME/bin:$SPARK_HOME/sbin

source ~/.bashrc
# lancé spark
start-master.sh

